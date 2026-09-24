# ConnectCar System | Apresentação Comercial

Apresentação de vendas interativa em 12 slides, feita para a web, que conduz o cliente do problema à proposta e fecha com um CTA para o WhatsApp.

Ao vivo: [apresentacao-connect.vercel.app](https://apresentacao-connect.vercel.app)

Apresentação comercial desenvolvida por Pedro Paulo Lacerda para o ConnectCar System, um CRM para concessionárias e revendas de veículos. O produto pertence ao cliente; a landing page do mesmo projeto está no repositório [connectcar](https://github.com/pplacerda07/connectcar).

## Destaques

- **Roteiro completo de venda em 12 slides**: abertura, problema, funções do sistema (funil Kanban, WhatsApp integrado, gestão de estoque, integração com portais, DRE e fechamento, nota fiscal, automação de contratos), ROI, planos e CTA final.
- **Navegação por roda do mouse, teclado e toque**: setas do teclado, swipe horizontal ou vertical no celular e scroll no desktop.
- **Transições direcionais com framer-motion**: o slide entra e sai pelo lado correto conforme o usuário avança ou volta, com animação spring.
- **Barra de progresso animada** no topo e logo do cliente fixa no canto, com marca d'água discreta ao centro.
- **Slide de ROI com contador animado** (react-countup) e **slide de planos** com botões que abrem o WhatsApp com mensagem pronta.
- **Layout pensado para celular**: um único bloco de media query reduz tipografia, ícones e espaçamentos para cada slide caber na tela sem rolagem.
- **Metadados Open Graph e Twitter Card** para gerar prévia com imagem ao compartilhar o link.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- framer-motion 12 (transições e animações de entrada)
- react-countup (contador do slide de ROI)
- lucide-react (ícones)
- `next/font` com as fontes Barlow e Barlow Condensed
- ESLint 9 com `eslint-config-next`

## Estrutura

```
apresentacao_connect/
├── src/
│   ├── app/                               # layout (metadados, Open Graph, fontes), página e estilos globais
│   └── components/
│       ├── HorizontalSlideController.tsx  # navegação, transições e barra de progresso
│       ├── slides/                        # os 12 slides, um componente por slide
│       └── sections/                      # componentes em formato de seção, não usados na página atual
└── public/                                # logo do sistema (favicon, canto e marca d'água)
```

## Como rodar localmente

Pré-requisito: Node.js 20.9 ou superior (exigência do Next.js 16).

```bash
git clone https://github.com/pplacerda07/apresentacao_connect.git
cd apresentacao_connect
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) e navegue com as setas do teclado, a roda do mouse ou gestos de swipe. Não há variáveis de ambiente obrigatórias.

Outros scripts:

```bash
npm run build   # build de produção
npm run start   # serve o build
npm run lint    # ESLint
```

## Decisões técnicas

- **Um controlador, slides independentes**: `page.tsx` só declara a ordem dos slides; o `HorizontalSlideController` renderiza apenas o slide ativo dentro de `AnimatePresence` e passa a direção via `custom`, então incluir ou reordenar slides é mudar uma linha.
- **Proteção contra saltos duplos**: o evento de roda usa um limiar de sensibilidade e uma trava de 800 ms, evitando que um único gesto no trackpad pule vários slides.
- **Swipe que respeita o conteúdo**: no gesto vertical, o controlador verifica se a área interna ainda tem rolagem antes de trocar de slide; o gesto horizontal sempre navega.
- **Comportamento de apresentação, não de página**: a rolagem nativa do `body` é desativada (`overflow: hidden` e `touch-action: none`) e o contêiner usa `100dvh` para ocupar a tela certa em navegadores mobile.

## Autor

Pedro Paulo Lacerda · [github.com/pplacerda07](https://github.com/pplacerda07)
