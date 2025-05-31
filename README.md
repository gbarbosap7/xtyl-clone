# XTYL Digital Clone

Este é um clone do site [XTYL Digital](https://xtyl.digital/), criado como um projeto de estudo.

## Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Conta no GitHub
- Conta no Netlify

## Instalação

1. Clone o repositório:
```bash
git clone [seu-repositorio]
cd xtyl-clone
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o script para baixar as fontes:
```bash
node download-fonts.js
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Deploy no Netlify

1. Primeiro, faça o push do seu código para o GitHub:
```bash
git add .
git commit -m "Preparando para deploy"
git push
```

2. Acesse [Netlify](https://www.netlify.com/) e faça login com sua conta

3. Clique em "Add new site" > "Import an existing project"

4. Selecione seu repositório do GitHub

5. Configure as seguintes opções de build:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment variables (se necessário)

6. Clique em "Deploy site"

O Netlify irá automaticamente:
- Detectar que é um projeto Next.js
- Instalar as dependências
- Executar o build
- Fazer o deploy do site

Você pode acompanhar o progresso do deploy na interface do Netlify.

## Estrutura do Projeto

```
xtyl-clone/
├── public/
│   ├── fonts/
│   │   ├── ClashDisplay-Variable.woff2
│   │   └── Satoshi-Variable.woff2
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── AnimatedText.tsx
│   │   └── ProjectsGrid.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   └── index.tsx
│   └── styles/
│       └── globals.css
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── netlify.toml
└── tsconfig.json
```

## Características

- Design responsivo
- Animações suaves
- Cursor personalizado
- Tela de carregamento animada
- Transições de página
- Menu de navegação interativo
- Grade de projetos com efeitos hover 