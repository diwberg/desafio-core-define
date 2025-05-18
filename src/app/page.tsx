"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Star, Check, ArrowRight, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

// Hook para animação de scroll
const useScrollAnimation = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.scroll-animated');
    const animatedSequences = document.querySelectorAll('.scroll-animated-sequence');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Adicionar classe para animar quando elemento estiver visível
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, {
      root: null, // viewport
      threshold: 0.1, // 10% do elemento visível
      rootMargin: '0px 0px -50px 0px' // margem negativa para disparar um pouco antes
    });
    
    // Observar todos os elementos com animação
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    // Observar sequências animadas
    animatedSequences.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      // Limpar quando componente for desmontado
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
      
      animatedSequences.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
};

// Simple Accordion Component (not using shadcn)
const Accordion = ({ items }: { 
  items: { id: string; question: string; answer: string }[] 
}) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container">
      {items.map((item) => (
        <div 
          key={item.id} 
          className={`faq-item ${openId === item.id ? 'faq-active' : ''}`}
        >
          <button
            onClick={() => toggleAccordion(item.id)}
            className="faq-trigger"
            aria-expanded={openId === item.id}
          >
            <span className="faq-question">{item.question}</span>
            <div className="faq-icon-wrapper">
              <ChevronDown className="faq-icon" />
            </div>
          </button>
          
          <div className={`faq-content ${openId === item.id ? 'faq-content-open' : ''}`}>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Simple Tabs Component (not using shadcn)
const SimpleTabs = ({ 
  tabs, 
  activeTab, 
  setActiveTab 
}: { 
  tabs: string[]; 
  activeTab: string; 
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className="tab-container">
      <div className="tabs-wrapper">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            type="button"
          >
            <span className="tab-text">{tab}</span>
            {activeTab === tab && <span className="tab-indicator" />}
          </button>
        ))}
      </div>
    </div>
  );
};

// Testimonial Carousel Component
const TestimonialCarousel = ({ testimonials }: { 
  testimonials: {
    name: string;
    stars: number;
    image: string;
    days?: string;
  }[] 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(testimonials.length).fill(false));
  const [imageError, setImageError] = useState<boolean[]>(Array(testimonials.length).fill(false));

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = (index: number) => {
    const newLoaded = [...isLoaded];
    newLoaded[index] = true;
    setIsLoaded(newLoaded);
  };

  const handleImageError = (index: number) => {
    console.error("Erro ao carregar imagem:", testimonials[index].image);
    const newErrors = [...imageError];
    newErrors[index] = true;
    setImageError(newErrors);
  };

  // Automatic carousel with pause on hover - Reduzido de 5000ms para 3000ms
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      next();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length, currentIndex]);

  // Handle mouse position within the carousel
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    
    const { left, width } = carouselRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const relativeX = mouseX - left;
    
    // Pause on the right side, resume on the left side
    setIsPaused(relativeX / width > 0.3);
  };

  return (
    <div className="relative pb-20">
      <div 
        className="testimonial-carousel-container"
        ref={carouselRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="testimonial-carousel-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-carousel-item"
            >
              <div className="result-card">
                <div className="result-image-wrapper">
                  {imageError[index] ? (
                    <div className="flex items-center justify-center h-full bg-gray-800 text-gray-400">
                      <span>Imagem não disponível</span>
                    </div>
                  ) : (
                    <img 
                      src={testimonial.image} 
                      alt={`Transformação de ${testimonial.name}`} 
                      className="result-image"
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageError(index)}
                      style={{ objectFit: "contain", width: "100%", height: "100%" }}
                    />
                  )}
                </div>
                <div className="result-caption">
                  <div className="stars-container">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="testimonial-star" />
                    ))}
                  </div>
                  <div className="participant-info">
                    <span className="participant-name">{testimonial.name}</span>
                    {testimonial.days && <span className="participant-days">{testimonial.days} dias</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="testimonial-controls">
        <button 
          className="carousel-control carousel-prev" 
          onClick={prev}
          aria-label="Anterior"
        >
          <ChevronLeft />
        </button>
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToIndex(index)}
              aria-label={`Foto ${index + 1}`}
            />
          ))}
        </div>
        <button 
          className="carousel-control carousel-next" 
          onClick={next}
          aria-label="Próximo"
        >
          <ChevronRight />
        </button>
      </div>
      
      <div className={`carousel-status ${isPaused ? 'paused' : 'playing'}`}>
        <span className="sr-only">{isPaused ? 'Pausado' : 'Em reprodução'}</span>
      </div>
    </div>
  );
};

export default function Home() {
  // States
  const [activeTab, setActiveTab] = useState("treinos");
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Ativar animações de scroll
  useScrollAnimation();
  
  // Handlers
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Controlar visibilidade do botão de voltar ao topo
  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const features = {
    treinos: [
      "Treinos curtos e eficientes (30 minutos)",
      "Exercícios focados no fortalecimento profundo",
      "Progressão gradual de dificuldade",
      "Alternativas para diferentes níveis",
      "Foco em qualidade de movimento, não quantidade",
      "Exercícios seguros e eficazes para qualquer idade"
    ],
    suporte: [
      "Grupo exclusivo de apoio entre mulheres",
      "Acesso à fisioterapeuta para dúvidas",
      "Suporte técnico durante todo o desafio",
      "Acompanhamento personalizado",
      "Comunidade motivadora e acolhedora",
      "Compartilhamento de experiências e resultados"
    ],
    materiais: [
      "Vídeos explicativos detalhados",
      "Apostila digital com todas as informações",
      "Planilha de acompanhamento de progresso",
      "Orientações nutricionais básicas",
      "Conteúdos extras sobre postura e saúde",
      "Materiais disponíveis para sempre após a compra"
    ],
    bonus: [
      "E-book com receitas práticas e saudáveis",
      "Meditações guiadas para relaxamento",
      "Workshop sobre como manter a postura no dia a dia",
      "Aulas extras de alongamento",
      "Desconto para a próxima edição avançada",
      "Consultoria individual (para primeiras inscritas)"
    ]
  };

  const testimonials = [
    {
      name: "Mariana S., 42 anos",
      stars: 5,
      image: "/images/result-1.jpg",
      days: "21"
    },
    {
      name: "Julia F., 35 anos",
      stars: 5,
      image: "/images/result-2.jpg",
      days: "30"
    },
    {
      name: "Patrícia M., 39 anos",
      stars: 5,
      image: "/images/result-3.jpg",
      days: "45"
    },
    {
      name: "Carla R., 45 anos",
      stars: 5,
      image: "/images/result-4.jpg",
      days: "60"
    },
    {
      name: "Renata B., 38 anos",
      stars: 5,
      image: "/images/result-5.jpg",
      days: "28"
    },
    {
      name: "Laura T., 41 anos",
      stars: 5,
      image: "/images/result-6.jpg",
      days: "35"
    },
    {
      name: "Fernanda M., 36 anos",
      stars: 5, 
      image: "/images/result-7.jpg",
      days: "42"
    },
    {
      name: "Camila P., 33 anos",
      stars: 5,
      image: "/images/result-8.jpeg",
      days: "21"
    },
    {
      name: "Daniela V., 40 anos",
      stars: 5,
      image: "/images/result-9.jpg",
      days: "50"
    },
    {
      name: "Bianca L., 37 anos",
      stars: 5,
      image: "/images/result-10.jpg",
      days: "25"
    },
    {
      name: "Amanda C., 43 anos",
      stars: 5,
      image: "/images/result-11.jpg",
      days: "32"
    },
    {
      name: "Gabriela M., 29 anos",
      stars: 5,
      image: "/images/result-12.jpg",
      days: "40"
    }, 
    {
      name: "Sofia T., 34 anos",
      stars: 5,
      image: "/images/result-13.jpg",
      days: "21"
    }, 
    {
      name: "Carolina A., 39 anos",
      stars: 5,
      image: "/images/result-14.jpg",
      days: "45"
    }, 
    {
      name: "Marina S., 41 anos",
      stars: 5,
      image: "/images/result-15.jpg",
      days: "60"
    }, 
    {
      name: "Luciana B., 36 anos",
      stars: 5,
      image: "/images/result-16.jpg",
      days: "30"
    }, 
    {
      name: "Juliana R., 40 anos",
      stars: 5,
      image: "/images/result-17.jpg",
      days: "28"
    }, 
    {
      name: "Aline V., 32 anos",
      stars: 5,
      image: "/images/result-18.jpg",
      days: "35"
    }, 
    {
      name: "Marcela F., 44 anos",
      stars: 5,
      image: "/images/result-19.jpg",
      days: "42"
    }, 
  ];

  const faqItems = [
    {
      id: "faq-1",
      question: "O que é o Desafio Core Define?",
      answer: "O Desafio Core Define é um programa de treinamento criado especificamente para mulheres que desejam fortalecer o core de forma consciente e funcional, aliviando dores nas costas, melhorando a postura e recuperando a autoestima."
    },
    {
      id: "faq-2",
      question: "Quem pode participar?",
      answer: "O programa é indicado para mulheres de qualquer idade que buscam melhorar sua qualidade de vida, especialmente mães e mulheres com rotinas intensas que precisam de um método eficiente e adaptável."
    },
    {
      id: "faq-3",
      question: "Preciso ter experiência com exercícios?",
      answer: "Não! O método foi desenvolvido para ser acessível a iniciantes e também desafiador para quem já pratica atividades físicas. Todos os exercícios são demonstrados em detalhes e com opções de adaptação."
    },
    {
      id: "faq-4",
      question: "Quanto tempo dura o desafio?",
      answer: "O desafio principal tem duração de 21 dias, com treinos que podem ser realizados em cerca de 30 minutos. A continuidade é incentivada com programas de manutenção após o desafio inicial."
    },
    {
      id: "faq-5",
      question: "Quando começa a próxima turma?",
      answer: "A data exata de abertura da próxima turma será anunciada em breve, mas quem está na lista de espera será avisado com antecedência e terá prioridade nas vagas limitadas."
    }
  ];

  const benefits = [
    {
      icon: "🌱",
      title: "Reduz dores e tensões",
      description: "Alívio de dores nas costas, pescoço e outros desconfortos comuns."
    },
    {
      icon: "✨",
      title: "Aumenta autoestima e energia",
      description: "Reconexão com seu corpo e mente para uma vida com mais disposição."
    },
    {
      icon: "💪",
      title: "Fortalece o core com consciência",
      description: "Exercícios funcionais que trabalham mais do que só a aparência."
    },
    {
      icon: "⏰",
      title: "Para mulheres com rotina puxada",
      description: "Criado para mães e mulheres reais que precisam conciliar muitas responsabilidades."
    }
  ];

  return (
    <div className="relative">
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black opacity-60 z-[-1]"></div>
      
      {/* Botão de voltar ao topo */}
      {showScrollTop && (
        <button
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg z-50 hover:bg-primary/90 transition-all"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <ChevronUp size={24} />
        </button>
      )}
      
      {/* Hero Section */}
      <section id="home" className="hero-container">
        <div className="container mx-auto px-4">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 gradient-text">
                DESAFIO CORE DEFINE
              </h1>
              
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-white">
                SUA VIRADA COMEÇA AQUI
              </h2>
              
              <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-300">
                Se você sentiu que esse desafio pode ser sua virada de chave, entra aqui. 
                <span className="font-bold"> A prioridade é sua.</span>
              </p>
              
              <div className="mt-8 md:mt-10 bg-red-500">
                <a 
                  href="#waitlist"
                  className="cta-button inline-block purple-glow px-8 py-4"
                >
                  QUERO ENTRAR NA LISTA DE ESPERA
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img 
                src="/images/expert-photo.png" 
                alt="Amanda - Fisioterapeuta e especialista em fortalecimento do core" 
                className="expert-photo"
              />
            </div>
          </div>
          
          <div className="scroll-indicator">
            <a href="#sobre">
              <ChevronDown size={30} />
            </a>
          </div>
        </div>
      </section>

      {/* Sobre o Desafio */}
      <section id="sobre" className="content-section purple-gradient-bg">
        <div className="container">
          <div className="text-center mb-12 scroll-animated fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              O QUE É O DESAFIO CORE DEFINE
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-300 px-2">
              É um método criado por Amanda, fisioterapeuta e mãe, que fortalece o core de forma profunda e funcional. 
              Muito além da estética: melhora postura, reduz dores e reconecta a mulher com seu corpo e autoestima.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto scroll-animated-sequence">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="feature-card flex items-start p-4 md:p-6 hover:shadow-[0_10px_30px_-10px_rgba(138,43,226,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl mr-3 md:mr-4 float-animation">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Que Você Vai Receber */}
      <section className="content-section bg-black">
        <div className="container">
          <div className="text-center mb-12 scroll-animated fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              O QUE VOCÊ VAI RECEBER
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <SimpleTabs 
              tabs={Object.keys(features)}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            
            <div className="feature-content glass-effect rounded-lg p-6 md:p-8 mt-6 scroll-animated fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-animated-sequence">
                {features[activeTab as keyof typeof features].map((item, index) => (
                  <div
                    key={index}
                    className="feature-item"
                  >
                    <div className="feature-icon">
                      <Check size={14} className="text-white" />
                    </div>
                    <p className="feature-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="content-section purple-gradient-bg">
        <div className="container">
          <div className="text-center mb-12 scroll-animated fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              RESULTADOS REAIS
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-300 px-2 mb-8">
              Transformações reais das mulheres que participaram do Desafio Core Define
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto scroll-animated zoom-in">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="content-section bg-black">
        <div className="container">
          <div className="text-center mb-12 scroll-animated fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-300 px-2 mb-8">
              Tire suas dúvidas sobre o Desafio Core Define
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto scroll-animated fade-up">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
      
      {/* Quando Começa */}
      <section className="content-section purple-gradient-bg">
        <div className="container text-center scroll-animated fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            QUANDO ABRE A PRÓXIMA TURMA?
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-12 text-white">
            Em breve <span className="text-primary">(mas quem está na lista entra primeiro)</span>
          </h3>
        </div>
      </section>
      
      {/* Waitlist Form */}
      <section id="waitlist" className="content-section bg-black">
        <div className="container">
          <div className="max-w-xl mx-auto text-center scroll-animated fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              VOCÊ MERECE VOLTAR A SE OLHAR COM ORGULHO
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Entre no nosso grupo e inicie sua transformação com a gente.
            </p>
            
            <div className="glass-effect p-6 md:p-8 rounded-lg scroll-animated fade-up">
              <div className="flex flex-col items-center">
                <div className="qr-code-container mb-6 bg-white p-4 rounded-lg">
                  <img 
                    src="/images/grupo-qrcode.png" 
                    alt="QR Code para entrar no grupo" 
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                
                <p className="text-gray-300 mb-6">Escaneie o QR code ou clique no botão abaixo</p>
                
                <a 
                  href="https://chat.whatsapp.com/coredefine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-button w-full flex items-center justify-center"
                >
                  <span>ENTRAR NO GRUPO DO WHATSAPP</span>
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 md:py-12 bg-black border-t border-gray-800">
        <div className="container text-center">
          <p className="text-gray-500 mb-4">
            © {new Date().getFullYear()} Desafio Core Define. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-6 md:space-x-8">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
