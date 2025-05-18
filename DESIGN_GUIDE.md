# Design System Guide - Desafio Core Define

Este documento serve como guia de estilo e padrões de UI/UX para manter a consistência visual em todo o site.

## Paleta de Cores

### Cores Primárias
- **Roxo Principal**: `#8A2BE2` (var(--primary))
- **Roxo Secundário**: `#692B8C` (var(--secondary))
- **Roxo Terciário**: `#B066D6` (var(--tertiary))
- **Roxo Acento**: `#A239CA` (var(--accent))

### Cores de Interface
- **Fundo**: `#0A0A0A` (var(--background))
- **Texto Principal**: `#FFFFFF` (var(--foreground))
- **Cartões**: `#121212` (var(--card))
- **Campos**: `#1F1F1F` (var(--input))
- **Secundário (Textos)**: `#A0A0A0` (var(--muted-foreground))
- **Bordas**: `#333333` (var(--border))

## Tipografia

- **Títulos**: 'Montserrat', sans-serif (font-weight: 700, letter-spacing: -0.02em)
- **Corpo**: 'Poppins', system-ui, sans-serif
- **Tamanhos** (mobile / desktop):
  - H1: 2.5rem / 3.75rem (40px / 60px)
  - H2: 1.875rem / 2.5rem (30px / 40px)
  - H3: 1.5rem / 1.875rem (24px / 30px)
  - Texto: 1rem / 1.125rem (16px / 18px)
  - Pequeno: 0.875rem (14px)

## Elementos UI

### Botões
- **Primário**: Gradiente linear entre var(--primary) e var(--tertiary)
- **Hover**: Escala ligeiramente (transform: scale(1.02)) e adiciona sombra
- **Border-radius**: 0.5rem (8px) (var(--radius))
- **Padding**: 0.75rem 1.5rem (12px 24px)

### Cards & Containers
- **Background**: rgba(26, 20, 35, 0.7) com backdrop-filter: blur(10px)
- **Border**: 1px solid rgba(138, 43, 226, 0.1)
- **Border-radius**: 0.5rem (8px)
- **Sombra (hover)**: 0 10px 30px -10px rgba(138, 43, 226, 0.3)

## Padrões de Componentes

### Abas (Tabs)
- Usar `tab-container` como container principal
- Botões de navegação com classe `tab-button`
- Indicador visual na aba ativa (`.tab-indicator`)
- Transição suave ao trocar de aba (0.3s ease)
- Conteúdo com fade-in animado

### Acordeão (FAQ)
- Container com classe `faq-container`
- Itens com classe `faq-item` e `faq-active` quando aberto
- Botão com classe `faq-trigger`
- Ícone de seta gira 180° quando aberto
- Altura animada ao expandir/colapsar

### Carrossel (Depoimentos)
- Container com classe `testimonial-carousel-container`
- Track de slides com classe `testimonial-carousel-track`
- Controles de navegação em `.testimonial-controls`
- Indicador de status (pausa/reprodução)
- Interação com mouse para pausar/reproduzir

## Animações e Transições

### Padrões de Timing
- **Rápida**: 0.2s ease (hover, feedback imediato)
- **Média**: 0.3s ease (transições de interface)
- **Lenta**: 0.5-0.6s cubic-bezier(0.4, 0, 0.2, 1) (movimentos maiores)

### Efeitos Comuns
- **Hover em Cards**: translateY(-5px) + sombra
- **Efeito Gradiente**: background-image com vários radial-gradient
- **Pulse**: Animação de pulsação para chamar atenção
- **Indicadores**: Escala (1.2) e mudança de cor

## Responsividade

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: >= 640px
- **Desktop**: >= 768px
- **Large Desktop**: >= 1024px

### Práticas
- Design mobile-first
- Flexbox para layouts adaptáveis
- Grid para estruturas complexas
- Espaçamento aumenta progressivamente em telas maiores

## Acessibilidade

- Contraste mínimo de 4.5:1 para texto
- Estados focáveis para todos elementos interativos
- Navegação por teclado funcional
- Textos alternativos para imagens
- Classes `sr-only` para textos auxiliares de leitores de tela 