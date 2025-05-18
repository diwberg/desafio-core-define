"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Star, Check, ArrowRight, ChevronUp } from "lucide-react";

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

export default function Home() {
  // States
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("treinos");
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email cadastrado:", email);
    setSubmitted(true);
    setEmail("");
  };

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
      quote: "Você me tirou do caixão. Minha vida mudou completamente depois do desafio.",
      name: "Mariana S.",
      stars: 5
    },
    {
      quote: "Foi a luz no fim do túnel pra mim. Não tinha mais esperança até encontrar o método.",
      name: "Julia F.",
      stars: 5
    },
    {
      quote: "Voltei a sentir orgulho de mim mesma. Estou mais forte, mais confiante.",
      name: "Patrícia M.",
      stars: 5
    },
    {
      quote: "Meu marido notou a diferença não só no meu corpo, mas principalmente na minha energia.",
      name: "Carla R.",
      stars: 5
    }
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
      <section className="hero-section">
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              DESAFIO CORE DEFINE
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              SUA VIRADA COMEÇA AQUI
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Se você sentiu que esse desafio pode ser sua virada de chave, entra aqui. 
              <span className="font-bold"> A prioridade é sua.</span>
            </p>
            
            <div className="mt-8">
              <a 
                href="#waitlist"
                className="cta-button inline-block purple-glow text-lg px-8 py-4"
              >
                QUERO ENTRAR NA LISTA DE ESPERA
              </a>
            </div>
          </div>
        </div>
        
        <a 
          href="#sobre" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="animate-bounce">
            <ChevronDown size={30} />
          </div>
        </a>
      </section>

      {/* Sobre o Desafio */}
      <section id="sobre" className="content-section purple-gradient-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              O QUE É O DESAFIO CORE DEFINE
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-300 px-2">
              É um método criado por Amanda, fisioterapeuta e mãe, que fortalece o core de forma profunda e funcional. 
              Muito além da estética: melhora postura, reduz dores e reconecta a mulher com seu corpo e autoestima.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
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
          <div className="text-center mb-12">
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
            
            <div className="feature-content glass-effect rounded-lg p-6 md:p-8 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              DEPOIMENTOS REAIS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="text-primary w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 text-gray-200 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="text-right">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="content-section bg-black">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-300 px-2 mb-8">
              Tire suas dúvidas sobre o Desafio Core Define
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
      
      {/* Quando Começa */}
      <section className="content-section purple-gradient-bg">
        <div className="container text-center">
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
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              VOCÊ MERECE VOLTAR A SE OLHAR COM ORGULHO
            </h2>
            <p className="text-lg mb-12 text-gray-300">
              Deixe seu nome. O resto a gente constrói juntas.
            </p>
            
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="glass-effect p-6 md:p-8 rounded-lg"
              >
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
                <button type="submit" className="cta-button w-full flex items-center justify-center">
                  <span>ENTRAR NA LISTA</span>
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </form>
            ) : (
              <div className="glass-effect p-6 md:p-8 rounded-lg border border-green-500">
                <p className="text-lg text-green-400 flex items-center justify-center">
                  <Check className="mr-2" size={24} />
                  Perfeito! Seu email foi cadastrado com sucesso.
                </p>
              </div>
            )}
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
