"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedHeader } from "./animated-section";

const faqItems = [
  {
    question: "O que é o Desafio Core Define?",
    answer:
      "O Desafio Core Define é um programa de treinamento criado especificamente para mulheres que desejam fortalecer o core de forma consciente e funcional, aliviando dores nas costas, melhorando a postura e recuperando a autoestima."
  },
  {
    question: "Quem pode participar?",
    answer:
      "O programa é indicado para mulheres de qualquer idade que buscam melhorar sua qualidade de vida, especialmente mães e mulheres com rotinas intensas que precisam de um método eficiente e adaptável."
  },
  {
    question: "Preciso ter experiência com exercícios?",
    answer:
      "Não! O método foi desenvolvido para ser acessível a iniciantes e também desafiador para quem já pratica atividades físicas. Todos os exercícios são demonstrados em detalhes e com opções de adaptação."
  },
  {
    question: "Quanto tempo dura o desafio?",
    answer:
      "O desafio principal tem duração de 21 dias, com treinos que podem ser realizados em cerca de 30 minutos. A continuidade é incentivada com programas de manutenção após o desafio inicial."
  },
  {
    question: "Quando começa a próxima turma?",
    answer:
      "A data exata de abertura da próxima turma será anunciada em breve, mas quem está na lista de espera será avisado com antecedência e terá prioridade nas vagas limitadas."
  },
  {
    question: "Posso fazer mesmo se tiver lesões ou condições específicas?",
    answer:
      "O método foi criado por uma fisioterapeuta e prioriza a segurança. No entanto, em casos de lesões específicas, recomendamos consultar seu médico antes de iniciar o programa."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedHeader className="text-center">
            Perguntas Frequentes
          </AnimatedHeader>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2 
            }}
          >
            <Accordion type="single" collapsible className="mt-8">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/10">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 