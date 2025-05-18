"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermosPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-8">Termos de Uso</h1>
          
          <p className="text-gray-300 mb-4">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">1. Aceitação dos Termos</h2>
          <p className="text-gray-300 mb-4">
            Ao acessar e utilizar o Desafio Core Define, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com algum aspecto destes termos, por favor, não utilize nossos serviços.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">2. Descrição do Serviço</h2>
          <p className="text-gray-300 mb-4">
            O Desafio Core Define é um programa de treinamento online criado especificamente para mulheres que desejam fortalecer o core de forma consciente e funcional. O programa inclui exercícios, orientações e material de apoio.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">3. Elegibilidade</h2>
          <p className="text-gray-300 mb-4">
            O programa é indicado para mulheres de qualquer idade. No entanto, recomendamos consultar um médico antes de iniciar qualquer programa de exercícios, especialmente se você tiver condições de saúde preexistentes.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">4. Cadastro e Conta</h2>
          <p className="text-gray-300 mb-4">
            Para participar do desafio, você precisará fornecer informações precisas e atualizadas durante o processo de registro. Você é responsável por manter a confidencialidade das suas informações de conta e senha.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">5. Pagamentos e Reembolsos</h2>
          <p className="text-gray-300 mb-4">
            O valor do desafio deve ser pago integralmente antes do início da participação. Nossa política de reembolso permite o cancelamento com devolução integral em até 7 dias após a compra, desde que não tenha acessado mais de 30% do conteúdo.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">6. Propriedade Intelectual</h2>
          <p className="text-gray-300 mb-4">
            Todo o conteúdo fornecido como parte do Desafio Core Define, incluindo textos, gráficos, logos, imagens, vídeos e softwares, é propriedade do Desafio Core Define ou de seus licenciadores e está protegido por leis de direitos autorais.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">7. Uso Aceitável</h2>
          <p className="text-gray-300 mb-4">
            Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do serviço, uso do serviço ou acesso ao serviço sem permissão expressa por escrito.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">8. Isenção de Responsabilidade</h2>
          <p className="text-gray-300 mb-4">
            O programa oferece orientações gerais e não substitui o aconselhamento médico profissional. Não nos responsabilizamos por lesões ou problemas de saúde que possam resultar do uso das informações fornecidas.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">9. Alterações dos Termos</h2>
          <p className="text-gray-300 mb-4">
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor imediatamente após serem publicadas. O uso continuado dos serviços após tais alterações constitui sua aceitação dos novos termos.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">10. Lei Aplicável</h2>
          <p className="text-gray-300 mb-4">
            Estes termos são regidos e interpretados de acordo com as leis do Brasil, sem consideração aos seus princípios de conflito de leis.
          </p>
          
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4">11. Contato</h2>
          <p className="text-gray-300 mb-4">
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail: contato@desafiocoredefine.com.br
          </p>
        </div>
      </div>
    </div>
  );
} 