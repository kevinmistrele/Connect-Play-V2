# 🎮 ConnectPlay

**ConnectPlay** é uma plataforma web para conectar jogadores sem duo ou com time incompleto. O objetivo é facilitar a formação de duplas ou grupos baseados em interesses e perfis compatíveis.

---

## 🚀 Tecnologias Usadas

- **React + TypeScript**
- **Vite** (build rápido)
- **Tailwind CSS** (estilização)
- **ShadCN UI** (componentes prontos e acessíveis)
- **Node.js + Express** (backend - separado)
- **MongoDB** (banco de dados)

---

## 🧰 Como rodar o projeto (passo a passo)

> Esses passos são para rodar o **frontend** do projeto localmente.

### ✅ Pré-requisitos

- Ter o **Node.js** instalado (versão LTS recomendada)
- Ter o **npm** ou **yarn**
- Ter o **Git** instalado
- (Opcional) Usar o **WebStorm** com a conta acadêmica

---

### 📦 Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/connectplay.git

# 2. Acesse a pasta do frontend
cd connectplay-frontend

# 3. Instale as dependências
npm install

# 4. Rode o projeto localmente
npm run dev
```

### 🗂️ Estrutura de Pastas e Organização do Frontend


```bash
src/
├── assets/         # Imagens, logos, ícones, fontes
├── components/     # Componentes reutilizáveis e visuais (ex: Botão, Card, Modal)
├── features/       # Funcionalidades separadas por domínio (ex: matchmaking, chat, perfil)
│   └── matchmaking/
│       ├── components/           # Componentes específicos da funcionalidade
│       ├── MatchmakingPage.tsx   # Página principal (layout da tela)
│       └── matchmaking.logic.ts  # Lógica de funcionamento (hooks, handlers, chamadas API)
├── layouts/        # Estrutura base da interface (menu lateral, topo, etc.)
├── lib/            # Helpers, configurações globais, integração com libs externas (ex: axios)
├── pages/          # Páginas principais do sistema (ex: HomePage, ProfilePage)
├── routes/         # Definições de rotas do React Router
├── services/       # Conexões com backend / chamadas de API
├── store/          # Estado global da aplicação (Zustand, Redux, etc)
├── styles/         # Arquivos de estilo, configurações do Tailwind, temas
└── types/          # Tipagens globais e compartilhadas em TypeScript


| Parte da aplicação      | Local                                        | Descrição                                                                  |
| ----------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| Layout visual da tela   | `src/pages/` ou `src/features/*/components/` | JSX e Tailwind. Exibe o que o usuário vê, sem lógica pesada.               |
| Lógica funcional        | `src/features/*/*.logic.ts`                  | Toda regra de negócio (hooks, validação, chamadas API, controle de estado) |
| Componentes genéricos   | `src/components/`                            | Componentes reutilizáveis em diversas partes da aplicação                  |
| Integração com backend  | `src/services/`                              | Funções que fazem fetch/post no backend (Express/MongoDB)                  |
| Gerenciamento de estado | `src/store/`                                 | Zustand ou Redux, caso necessário manter dados globais                     |

```


## 🛠️ Guia rápido para colaborar no ConnectPlay

Se você for contribuir com o projeto, siga esses passos para garantir que tudo funcione corretamente e nada seja enviado direto para a branch `master`.

---

### 🚀 Passo a passo para subir uma funcionalidade

#### 1. Atualize sua `master` local

```bash
git checkout master
git pull origin master
```

#### 2. Crie uma nova branch para sua tarefa

```bash
git checkout -b feature/nome-da-sua-tarefa
```

**Exemplo:**

```bash
git checkout -b feature/criacao-de-card
```

#### 3. Faça suas alterações e comite

```bash
git add .
git commit -m "feat: cria componente de card de usuário"
```

#### 4. Envie sua branch para o GitHub

```bash
git push -u origin feature/nome-da-sua-tarefa
```

---

### ✅ Criar o Pull Request

1. Acesse o repositório no GitHub
2. Vai aparecer a opção **"Compare & pull request"**
3. Verifique se está indo de `feature/...` → `master`
4. Escreva um título e uma descrição do que fez
5. Crie o PR

---

### 🔒 Observações importantes

- **Não faça push direto para a `master`**
- **Somente o Kevin pode fazer o merge mas podem testar**
- Se tiver dúvida, avisa no grupo ou marca alguém no PR

---

### 🧠 Dica: mensagens de commit

Ao escrever mensagens de commit, siga um padrão para facilitar a leitura do histórico do projeto. Aqui estão três prefixos comuns e seu uso:

- `feat:` → para **novas funcionalidades**
  > Ex: `feat: adiciona botão de login`

- `fix:` → para **correções de bugs**
  > Ex: `fix: corrige bug do formulário`

- `chore:` → para **tarefas técnicas sem impacto direto no usuário**
  > Ex: `chore: remove console.log`

---

