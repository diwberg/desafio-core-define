"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2" size={18} />
          <span>Voltar para a página inicial</span>
        </Link>

        <div className="prose prose-invert max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8">Política de Privacidade</h1>
          
          <p className="text-gray-300 mb-4">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <p className="text-gray-300 mb-6">
            O Desafio Core Define está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">1. Informações que Coletamos</h2>
          <p className="text-gray-300 mb-4">
            <strong>Informações de cadastro:</strong> Nome, e-mail, telefone, data de nascimento e outras informações necessárias para criação da sua conta.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Informações de uso:</strong> Dados sobre como você interage com nosso site e serviços, incluindo logs de acesso, tempo de permanência, recursos utilizados e páginas visitadas.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Informações de pagamento:</strong> Dados financeiros necessários para processar sua compra. Observe que não armazenamos informações completas de cartão de crédito em nossos servidores.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">2. Como Usamos Suas Informações</h2>
          <ul className="text-gray-300 mb-4 list-disc pl-5">
            <li className="mb-2">Para fornecer e manter nossos serviços;</li>
            <li className="mb-2">Para processar pagamentos e administrar sua conta;</li>
            <li className="mb-2">Para enviar comunicações importantes sobre o programa;</li>
            <li className="mb-2">Para melhorar e personalizar sua experiência com o programa;</li>
            <li className="mb-2">Para enviar materiais de marketing, caso você tenha optado por recebê-los;</li>
            <li className="mb-2">Para cumprir obrigações legais.</li>
          </ul>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">3. Compartilhamento de Informações</h2>
          <p className="text-gray-300 mb-4">
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing sem seu consentimento. Podemos compartilhar suas informações nas seguintes circunstâncias:
          </p>
          <ul className="text-gray-300 mb-4 list-disc pl-5">
            <li className="mb-2">Com prestadores de serviços que nos ajudam a operar nosso negócio;</li>
            <li className="mb-2">Quando exigido por lei, processo legal ou autoridades governamentais;</li>
            <li className="mb-2">Para proteger nossos direitos, privacidade, segurança ou propriedade;</li>
            <li className="mb-2">Em conexão com uma fusão, aquisição ou venda de ativos, desde que a parte receptora concorde em tratar suas informações de acordo com esta Política de Privacidade.</li>
          </ul>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">4. Cookies e Tecnologias Semelhantes</h2>
          <p className="text-gray-300 mb-4">
            Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, entender como você usa nossos serviços e personalizar nosso conteúdo. Você pode configurar seu navegador para recusar todos os cookies ou indicar quando um cookie está sendo enviado.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">5. Segurança</h2>
          <p className="text-gray-300 mb-4">
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">6. Seus Direitos</h2>
          <p className="text-gray-300 mb-4">
            De acordo com as leis aplicáveis, você pode ter o direito de:
          </p>
          <ul className="text-gray-300 mb-4 list-disc pl-5">
            <li className="mb-2">Acessar as informações pessoais que temos sobre você;</li>
            <li className="mb-2">Corrigir informações incorretas ou incompletas;</li>
            <li className="mb-2">Solicitar a exclusão de seus dados pessoais;</li>
            <li className="mb-2">Retirar seu consentimento a qualquer momento;</li>
            <li className="mb-2">Opor-se ao processamento de seus dados para marketing direto.</li>
          </ul>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">7. Retenção de Dados</h2>
          <p className="text-gray-300 mb-4">
            Mantemos suas informações pessoais pelo tempo necessário para fornecer os serviços solicitados, ou para cumprir com nossas obrigações legais, resolver disputas e fazer cumprir nossos acordos.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">8. Alterações nesta Política</h2>
          <p className="text-gray-300 mb-4">
            Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente será sempre publicada em nosso site, e notificaremos você sobre quaisquer alterações significativas.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">9. Contato</h2>
          <p className="text-gray-300 mb-4">
            Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco através do e-mail: privacidade@desafiocoredefine.com.br
          </p>
        </div>
      </div>
    </div>
  );
} 