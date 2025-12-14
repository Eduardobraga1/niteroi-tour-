## Niteroi Tour – Site simples de turismo (Next.js + React + Tailwind + shadcn-style)

Este é um site simples para uma agência de turismo fictícia (Niteroi Tour), feito com:

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Componentes de UI inspirados no shadcn/ui** (`Button`, `Card`, etc.)

### Como rodar o projeto

1. Acesse a pasta do projeto:

```bash
cd "turismo-site"
```

2. Instale as dependências (use npm, yarn ou pnpm — abaixo com npm):

```bash
npm install
```

3. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador:

`http://localhost:3000`

### Estrutura principal

- `app/page.tsx`: página inicial com seções de hero, pacotes, destinos e contato.
- `components/`: componentes React reutilizáveis (header, footer, seções, etc.).
- `components/ui/`: componentes de UI no estilo shadcn (`button`, `card`).
- `lib/utils.ts`: helper `cn` para combinar classes (como no shadcn/ui).
- `tailwind.config.ts`: configuração do Tailwind.

Você pode adaptar facilmente textos, imagens e cores para a sua marca de turismo.


