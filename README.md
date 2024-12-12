# Projeto de Automação com Cypress

## 📋 Descrição
Projeto de automação de testes end-to-end (E2E) utilizando Cypress para testar funcionalidades de cadastro de usuários e produtos no ServeRest.

## 🚀 Funcionalidades Testadas
- Cadastro de usuários
- Cadastro de produtos
- Login de usuários
- Validações via API REST

## 🔧 Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM ou Yarn

## 💻 Instalação

# Para Linux/Mac (Bash):
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd [nome-do-diretorio]

# Instale as dependências
npm install
```

# Para Windows (PowerShell/CMD):
```terminal
# Clone o repositório
git clone [git@github.com:WesleyABastos/AmbevTech.git]  

# Entre no diretório
cd [nome-do-diretorio]

# Instale as dependências
npm install
```

## 🧪 Executando os Testes

# Para Linux/Mac (Bash):
```bash
# Abre o Cypress Test Runner
npx cypress open

# Executa os testes em modo headless
npx cypress run
```

# Para Windows (PowerShell/CMD):
```terminal
# Abre o Cypress Test Runner
npx cypress open

# Executa os testes em modo headless
npx cypress run
```

## 📁 Estrutura do Projeto
```
├── cypress/
│   ├── e2e/                        # Arquivos de teste
│   │   ├── cadastro.cy.js          # Testes de cadastro de usuários
│   │   ├── cadastroProduto.cy.js   # Testes de cadastro de produtos
│   │   ├── produto.api.cy.js       # Testes de API de produtos
│   │   └── usuario.api.cy.js       # Testes de API de usuários
│   ├── fixtures/                   # Arquivos de dados
│   │   ├── produtos.json           # Dados de produtos para testes
│   │   └── produtosApi.json        # Dados para testes de API
│   ├── pages/                      # Page Objects
│   │   ├── CadastroPage.js
│   │   ├── LoginPage.js
│   │   └── ProdutoPage.js
│   └── support/                    # Arquivos de suporte
│       ├── commands.js             # Comandos customizados
│       └── e2e.js                  # Configurações globais
```

## 🛠️ Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework de testes
- [Node.js](https://nodejs.org/) - Ambiente de execução
- JavaScript - Linguagem de programação
- [ServeRest](https://front.serverest.dev) - API de testes

## 📝 Padrões de Projeto
- Page Objects
- Custom Commands
- Data-driven Testing
- API Testing


## 🤝 Suporte
Em caso de dúvidas ou problemas, abra uma issue no repositório.

## ⚙️ Configuração
O projeto está configurado com as seguintes especificações no cypress.config.js:
- Timeout de carregamento de página: 30 segundos
- Timeout de comandos: 20 segundos
- Resolução dos testes: 1280x720
- URL base: https://front.serverest.dev

## 🧪 Executando os Testes
