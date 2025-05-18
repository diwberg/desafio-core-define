"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function TermosPage() {
  const [activeSection, setActiveSection] = useState("");
  const sections = [
    { id: "aceitacao", title: "Aceitação dos Termos" },
    { id: "servico", title: "Descrição do Serviço" },
    { id: "elegibilidade", title: "Elegibilidade" },
    { id: "cadastro", title: "Cadastro e Conta" },
    { id: "pagamentos", title: "Pagamentos e Reembolsos" },
    { id: "propriedade", title: "Propriedade Intelectual" },
    { id: "uso", title: "Uso Aceitável" },
    { id: "responsabilidade", title: "Isenção de Responsabilidade" },
    { id: "alteracoes", title: "Alterações dos Termos" },
    { id: "lei", title: "Lei Aplicável" },
    { id: "contato", title: "Contato" }
  ];

  // Observer para detectar a seção visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header with back button */}
      <div className="w-full bg-gradient-to-r from-black to-[#1A0B2E] border-b border-gray-800 sticky top-0 z-10 backdrop-blur-sm bg-opacity-90">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2" size={18} />
            <span>Voltar para a página inicial</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar for navigation on larger screens */}
          <div className="hidden md:block w-64 shrink-0 sticky top-24 self-start h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="glass-effect rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Nesta página</h3>
              <nav className="space-y-2">
                {sections.map(section => (
                  <a 
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block py-2 px-3 rounded-md transition-colors 
                      ${activeSection === section.id 
                        ? 'bg-primary/20 text-white font-medium' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="glass-effect rounded-lg p-6 md:p-8 shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8">Termos de Uso</h1>
              
              <p className="text-gray-300 mb-4">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
              
              <div className="space-y-8">
                <section id="aceitacao" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">1</span>
                    Aceitação dos Termos
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Ao acessar e utilizar o Desafio Core Define, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com algum aspecto destes termos, por favor, não utilize nossos serviços.
                    </p>
                  </div>
                </section>
                
                <section id="servico" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">2</span>
                    Descrição do Serviço
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      O Desafio Core Define é um programa de treinamento online criado especificamente para mulheres que desejam fortalecer o core de forma consciente e funcional. O programa inclui exercícios, orientações e material de apoio.
                    </p>
                  </div>
                </section>
                
                <section id="elegibilidade" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">3</span>
                    Elegibilidade
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      O programa é indicado para mulheres de qualquer idade. No entanto, recomendamos consultar um médico antes de iniciar qualquer programa de exercícios, especialmente se você tiver condições de saúde preexistentes.
                    </p>
                  </div>
                </section>
                
                <section id="cadastro" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">4</span>
                    Cadastro e Conta
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Para participar do desafio, você precisará fornecer informações precisas e atualizadas durante o processo de registro. Você é responsável por manter a confidencialidade das suas informações de conta e senha.
                    </p>
                  </div>
                </section>
                
                <section id="pagamentos" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">5</span>
                    Pagamentos e Reembolsos
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      O valor do desafio deve ser pago integralmente antes do início da participação. Nossa política de reembolso permite o cancelamento com devolução integral em até 7 dias após a compra, desde que não tenha acessado mais de 30% do conteúdo.
                    </p>
                  </div>
                </section>
                
                <section id="propriedade" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">6</span>
                    Propriedade Intelectual
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Todo o conteúdo fornecido como parte do Desafio Core Define, incluindo textos, gráficos, logos, imagens, vídeos e softwares, é propriedade do Desafio Core Define ou de seus licenciadores e está protegido por leis de direitos autorais.
                    </p>
                  </div>
                </section>
                
                <section id="uso" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">7</span>
                    Uso Aceitável
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do serviço, uso do serviço ou acesso ao serviço sem permissão expressa por escrito.
                    </p>
                  </div>
                </section>
                
                <section id="responsabilidade" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">8</span>
                    Isenção de Responsabilidade
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      O programa oferece orientações gerais e não substitui o aconselhamento médico profissional. Não nos responsabilizamos por lesões ou problemas de saúde que possam resultar do uso das informações fornecidas.
                    </p>
                  </div>
                </section>
                
                <section id="alteracoes" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">9</span>
                    Alterações dos Termos
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor imediatamente após serem publicadas. O uso continuado dos serviços após tais alterações constitui sua aceitação dos novos termos.
                    </p>
                  </div>
                </section>
                
                <section id="lei" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">10</span>
                    Lei Aplicável
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Estes termos são regidos e interpretados de acordo com as leis do Brasil, sem consideração aos seus princípios de conflito de leis.
                    </p>
                  </div>
                </section>
                
                <section id="contato" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">11</span>
                    Contato
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail: <a href="mailto:contato@desafiocoredefine.com.br" className="text-primary hover:underline">contato@desafiocoredefine.com.br</a>
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Mobile navigation - visible only on small screens */}
            <div className="md:hidden mt-8 glass-effect rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Navegue pelos tópicos</h3>
              <div className="grid grid-cols-2 gap-2">
                {sections.map(section => (
                  <a 
                    key={section.id}
                    href={`#${section.id}`}
                    className={`py-2 px-3 rounded-md text-sm transition-colors text-center
                      ${activeSection === section.id 
                        ? 'bg-primary/20 text-white font-medium' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 