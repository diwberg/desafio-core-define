"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function PrivacidadePage() {
  const [activeSection, setActiveSection] = useState("");
  const sections = [
    { id: "informacoes", title: "Informações que Coletamos" },
    { id: "uso", title: "Como Usamos Suas Informações" },
    { id: "compartilhamento", title: "Compartilhamento de Informações" },
    { id: "cookies", title: "Cookies e Tecnologias Semelhantes" },
    { id: "seguranca", title: "Segurança" },
    { id: "direitos", title: "Seus Direitos" },
    { id: "retencao", title: "Retenção de Dados" },
    { id: "alteracoes", title: "Alterações nesta Política" },
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
              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8">Política de Privacidade</h1>
              
              <p className="text-gray-300 mb-4">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                O Desafio Core Define está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais.
              </p>
              
              <div className="space-y-10">
                <section id="informacoes" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">1</span>
                    Informações que Coletamos
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      <strong className="text-white">Informações de cadastro:</strong> Nome, e-mail, telefone, data de nascimento e outras informações necessárias para criação da sua conta.
                    </p>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      <strong className="text-white">Informações de uso:</strong> Dados sobre como você interage com nosso site e serviços, incluindo logs de acesso, tempo de permanência, recursos utilizados e páginas visitadas.
                    </p>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      <strong className="text-white">Informações de pagamento:</strong> Dados financeiros necessários para processar sua compra. Observe que não armazenamos informações completas de cartão de crédito em nossos servidores.
                    </p>
                  </div>
                </section>
                
                <section id="uso" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">2</span>
                    Como Usamos Suas Informações
                  </h2>
                  <div className="pl-11">
                    <ul className="text-gray-300 mb-4 list-disc space-y-2 pl-5">
                      <li className="leading-relaxed">Para fornecer e manter nossos serviços;</li>
                      <li className="leading-relaxed">Para processar pagamentos e administrar sua conta;</li>
                      <li className="leading-relaxed">Para enviar comunicações importantes sobre o programa;</li>
                      <li className="leading-relaxed">Para melhorar e personalizar sua experiência com o programa;</li>
                      <li className="leading-relaxed">Para enviar materiais de marketing, caso você tenha optado por recebê-los;</li>
                      <li className="leading-relaxed">Para cumprir obrigações legais.</li>
                    </ul>
                  </div>
                </section>
                
                <section id="compartilhamento" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">3</span>
                    Compartilhamento de Informações
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing sem seu consentimento. Podemos compartilhar suas informações nas seguintes circunstâncias:
                    </p>
                    <ul className="text-gray-300 mb-4 list-disc space-y-2 pl-5">
                      <li className="leading-relaxed">Com prestadores de serviços que nos ajudam a operar nosso negócio;</li>
                      <li className="leading-relaxed">Quando exigido por lei, processo legal ou autoridades governamentais;</li>
                      <li className="leading-relaxed">Para proteger nossos direitos, privacidade, segurança ou propriedade;</li>
                      <li className="leading-relaxed">Em conexão com uma fusão, aquisição ou venda de ativos, desde que a parte receptora concorde em tratar suas informações de acordo com esta Política de Privacidade.</li>
                    </ul>
                  </div>
                </section>
                
                <section id="cookies" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">4</span>
                    Cookies e Tecnologias Semelhantes
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, entender como você usa nossos serviços e personalizar nosso conteúdo. Você pode configurar seu navegador para recusar todos os cookies ou indicar quando um cookie está sendo enviado.
                    </p>
                  </div>
                </section>
                
                <section id="seguranca" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">5</span>
                    Segurança
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
                    </p>
                  </div>
                </section>
                
                <section id="direitos" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">6</span>
                    Seus Direitos
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      De acordo com as leis aplicáveis, você pode ter o direito de:
                    </p>
                    <ul className="text-gray-300 mb-4 list-disc space-y-2 pl-5">
                      <li className="leading-relaxed">Acessar as informações pessoais que temos sobre você;</li>
                      <li className="leading-relaxed">Corrigir informações incorretas ou incompletas;</li>
                      <li className="leading-relaxed">Solicitar a exclusão de seus dados pessoais;</li>
                      <li className="leading-relaxed">Retirar seu consentimento a qualquer momento;</li>
                      <li className="leading-relaxed">Opor-se ao processamento de seus dados para marketing direto.</li>
                    </ul>
                  </div>
                </section>
                
                <section id="retencao" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">7</span>
                    Retenção de Dados
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Mantemos suas informações pessoais pelo tempo necessário para fornecer os serviços solicitados, ou para cumprir com nossas obrigações legais, resolver disputas e fazer cumprir nossos acordos.
                    </p>
                  </div>
                </section>
                
                <section id="alteracoes" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">8</span>
                    Alterações nesta Política
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente será sempre publicada em nosso site, e notificaremos você sobre quaisquer alterações significativas.
                    </p>
                  </div>
                </section>
                
                <section id="contato" className="scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-primary/20 text-primary flex items-center justify-center w-8 h-8 rounded-full mr-3 flex-shrink-0">9</span>
                    Contato
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco através do e-mail: <a href="mailto:privacidade@desafiocoredefine.com.br" className="text-primary hover:underline">privacidade@desafiocoredefine.com.br</a>
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