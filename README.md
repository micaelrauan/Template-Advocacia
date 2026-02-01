# 🏛️ Cavalcanti & Associados - Site Institucional

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Site institucional premium para escritório de advocacia desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

> 🚀 **[Ver documentação de Deploy](DEPLOY.md)** - Guia completo para publicar no GitHub + Vercel/Netlify

---

## 📋 Sobre o Projeto

Site institucional moderno e elegante para o escritório **Cavalcanti & Associados**, localizado em Fortaleza - CE. O projeto foi desenvolvido com foco em:

- ✨ Design sofisticado e profissional
- 🎯 Experiência de usuário premium
- ⚡ Performance e SEO otimizados
- 📱 Responsividade total em todos os dispositivos
- ♿ Acessibilidade e boas práticas

### 🎨 Identidade Visual

**Nome:** Cavalcanti & Associados  
**Slogan:** Advocacia de Excelência

**Paleta de Cores:**

- Azul Marinho (Primary): #1a365d
- Dourado/Bege (Secondary): #b8a26f
- Tons neutros para contraste

**Tipografia:**

- Títulos: Playfair Display (Serif)
- Corpo: Inter (Sans-serif)

## 🚀 Tecnologias Utilizadas

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Icons**
- **Framer Motion** (animações)

## 📁 Estrutura do Projeto

```
advocacia-template/
├── app/
│   ├── page.tsx              # Página inicial
│   ├── sobre/
│   │   └── page.tsx          # Sobre o escritório
│   ├── areas-atuacao/
│   │   └── page.tsx          # Áreas de atuação
│   ├── contato/
│   │   └── page.tsx          # Página de contato
│   ├── privacidade/
│   │   └── page.tsx          # Política de privacidade
│   ├── termos/
│   │   └── page.tsx          # Termos de uso
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Estilos globais
├── components/
│   ├── Header.tsx            # Cabeçalho fixo
│   ├── Footer.tsx            # Rodapé completo
│   └── Testimonials.tsx      # Seção de depoimentos
├── public/                   # Arquivos estáticos
└── ...arquivos de config
```

## 🎯 Funcionalidades

### Página Inicial

- Hero section impactante com imagem de fundo
- Estatísticas do escritório
- Prévia das áreas de atuação
- Depoimentos de clientes
- Call-to-action estratégicos

### Sobre

- História do escritório
- Missão, visão e valores
- Apresentação da equipe
- Diferenciais competitivos

### Áreas de Atuação

- Direito Civil
- Direito Empresarial
- Direito Trabalhista
- Direito Penal
- Direito Previdenciário
- Direito Contratual

### Contato

- Formulário de contato funcional (front-end)
- Informações de localização
- Horário de atendimento
- Mapa integrado do Google Maps
- Validação de formulários

### Componentes Globais

- **Header:** Navegação fixa responsiva com menu mobile
- **Footer:** Completo com links, informações e redes sociais
- **Testimonials:** Carrossel de depoimentos

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Instalar dependências:**

```bash
npm install
```

2. **Executar em modo de desenvolvimento:**

```bash
npm run dev
```

3. **Acessar o site:**
   Abra [http://localhost:3000](http://localhost:3000) no navegador

4. **Build para produção:**

```bash
npm run build
npm start
```

## 🎨 Customização

### Alterar Cores

Edite o arquivo `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#1a365d', // Sua cor primária
    light: '#2d4a7c',
    dark: '#0f2744',
  },
  secondary: {
    DEFAULT: '#b8a26f', // Sua cor secundária
    // ...
  }
}
```

### Alterar Imagens

As imagens utilizam Unsplash. Para usar suas próprias imagens:

1. Adicione as imagens na pasta `public/images/`
2. Substitua as URLs no código:

```tsx
// De:
src = "https://images.unsplash.com/...";

// Para:
src = "/images/sua-imagem.jpg";
```

### Alterar Conteúdo

Todo o conteúdo está nos componentes. Edite diretamente:

- Textos institucionais
- Áreas de atuação
- Depoimentos de clientes
- Informações de contato

## 📱 Responsividade

O site é totalmente responsivo e foi testado em:

- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## ⚡ Performance

- Otimização de imagens com Next.js Image
- Lazy loading automático
- CSS otimizado com Tailwind
- Fontes otimizadas do Google Fonts

## 🔒 SEO

Cada página possui:

- Meta tags otimizadas
- Open Graph tags
- Títulos e descrições únicos
- Estrutura semântica HTML5

## � Deploy

Para publicar o site, siga o guia completo de deploy:

📖 **[DEPLOY.md](DEPLOY.md)** - Instruções detalhadas para:
- Configurar GitHub
- Deploy na Vercel (recomendado)
- Deploy na Netlify
- Configurar domínio personalizado
- Troubleshooting

### Quick Start

```bash
# 1. Inicializar Git
git init
git add .
git commit -m "🎉 Initial commit"

# 2. Criar repositório no GitHub e adicionar remote
git remote add origin https://github.com/SEU-USUARIO/seu-repositorio.git
git push -u origin main

# 3. Acessar vercel.com e importar o repositório
# Deploy automático em ~2 minutos!
```

## 📚 Documentação Adicional

- 📖 **[DEPLOY.md](DEPLOY.md)** - Guia completo de deploy
- 📋 **[PROJETO-INFO.md](PROJETO-INFO.md)** - Informações detalhadas do projeto
- 🔧 **[GUIA-USO.md](GUIA-USO.md)** - Guia de customização rápida

## 📄 Licença

Este é um projeto de demonstração para portfólio profissional.

## 👤 Contato do Site (Fictício)

**Cavalcanti & Associados**
- 📍 Av. Santos Dumont, 2828 - Aldeota, Fortaleza - CE
- 📞 (85) 3223-4567
- 📧 contato@cavalcantiadvocacia.com.br

---

## ⭐ Features

- [x] Design premium e moderno
- [x] Totalmente responsivo
- [x] SEO otimizado
- [x] Performance A+ no Lighthouse
- [x] TypeScript para type safety
- [x] Documentação completa
- [x] Pronto para deploy
- [x] Código limpo e organizado

---

**Desenvolvido com dedicação para demonstração profissional de portfólio** ⚖️

Se este projeto foi útil, considere dar uma ⭐ no GitHub!
