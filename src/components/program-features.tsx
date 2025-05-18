"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedHeader } from "./animated-section";

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

export function ProgramFeatures() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedHeader className="text-center">
            O Que Você Vai Receber
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
            className="mt-8"
          >
            <Tabs defaultValue="treinos" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full rounded-xl border border-primary/20 p-1 bg-muted">
                <TabsTrigger value="treinos" className="rounded-lg">Treinos</TabsTrigger>
                <TabsTrigger value="suporte" className="rounded-lg">Suporte</TabsTrigger>
                <TabsTrigger value="materiais" className="rounded-lg">Materiais</TabsTrigger>
                <TabsTrigger value="bonus" className="rounded-lg">Bônus</TabsTrigger>
              </TabsList>
              
              {Object.entries(features).map(([key, items]) => (
                <TabsContent key={key} value={key}>
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map((item, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              type: "spring",
                              stiffness: 100, 
                              damping: 20,
                              delay: index * 0.05
                            }}
                            className="flex items-start space-x-3"
                          >
                            <Badge variant="default" className="mt-1 flex-shrink-0">
                              {index + 1}
                            </Badge>
                            <span className="text-foreground">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 