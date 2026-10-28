# Bate Ponto

Sistema web de **controle de ponto eletrônico para empresas**. Colaboradores registram entrada, saída e intervalos pelo navegador, e a empresa acompanha jornadas, horas trabalhadas e inconsistências em um painel central.

> Projeto desenvolvido como Trabalho Final da disciplina **Processo de Desenvolvimento de Software** (Bacharelado em Sistemas de Informação), usando **Scrum** com gestão no **Jira**.

## Funcionalidades

**Implementado**

- [x] Tela de login com e-mail e senha (NextAuth, provider de credenciais)
- [x] Dashboard protegido: só acessa quem está autenticado
- [x] Logout
- [x] Client do Supabase configurado no servidor (SSR)

**Planejado** (refinado no backlog do Jira a cada sprint)

- [ ] Registro de ponto: entrada, início/fim de intervalo e saída
- [ ] Histórico de marcações do colaborador
- [ ] Cálculo de horas trabalhadas, horas extras e banco de horas
- [ ] Cadastro de empresas e colaboradores
- [ ] Perfis de acesso (colaborador e gestor/RH)
- [ ] Painel do gestor com a jornada da equipe
- [ ] Relatórios / espelho de ponto para exportação

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack, React Compiler) |
| UI | React 19, Tailwind CSS 4, daisyUI 5 |
| Autenticação | [NextAuth](https://next-auth.js.org) |
| Banco de dados | [Supabase](https://supabase.com) (PostgreSQL) via `@supabase/ssr` |
| Linguagem | TypeScript |

## Como rodar

**Pré-requisitos:** Node.js 20+ e um projeto criado no Supabase.

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie um arquivo `.env` na raiz com as variáveis abaixo:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=uma-string-aleatoria-e-longa

   # Supabase (Project Settings > API)
   NEXT_PUBLIC_SUPABASE_URL=https://<seu-projeto>.supabase.co
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<sua-publishable-key>
   ```

   Para gerar o `NEXTAUTH_SECRET`: `openssl rand -base64 32`

3. Suba o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000).

### Usuário de teste

Enquanto o cadastro de usuários não está ligado ao banco, o login aceita um usuário fixo:

| E-mail | Senha |
| --- | --- |
| `teste@gmail.com` | `teste123` |

### Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build de produção |
| `npm run lint` | Roda o ESLint |

## Estrutura

```
src/
├── app/
│   ├── api/auth/[...nextauth]/route.ts   # Configuração do NextAuth
│   ├── dashboard/page.tsx                # Área logada (protegida)
│   ├── layout.tsx
│   └── page.tsx                          # Página inicial / login
├── components/
│   ├── LoginForm.tsx
│   └── LogoutButton.tsx
└── lib/
    └── supabase/server.ts                # Client do Supabase para o servidor
```

## Processo de desenvolvimento

O projeto segue Scrum em 4 sprints, com backlog, scrum board e estimativas mantidos no Jira.

| Sprint | Período |
| --- | --- |
| Sprint 1 | 22/10 – 02/11 |
| Sprint 2 | 03/11 – 12/11 |
| Sprint 3 | 11/11 – 22/11 |
| Sprint 4 | 25/11 – 29/11 |

Entrega final e seminário: **02/12**. A documentação completa (requisitos, gestão do projeto, arquitetura e conclusão) fica na **Wiki deste repositório**.
