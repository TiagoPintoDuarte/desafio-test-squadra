# Teste Técnico Squadra - Automação Cypress

Este projeto contém uma suíte de automação de testes utilizando Cypress para APIs e interface web, estruturado por microsserviço, comandos customizados e boas práticas de arquitetura de testes.

## Estrutura do Projeto

- **cypress/e2e/api/** – Testes automatizados para APIs (ServeRest)
  - carrinhos.cy.js
  - login.cy.js
  - produtos.cy.js
  - usuarios.cy.js

- **cypress/e2e/web/** – Testes de interface (front-end)
  - cadastro.cy.js
  - login.cy.js

- **cypress/support/api/** – Comandos customizados e serviços para testes de API
  - carrinho.js
  - login.js
  - produto.js
  - usuario.js

- **cypress/support/web/** – (Comandos para testes de web, se aplicável)

- **cypress.env.json** – Dados sensíveis, como e-mail e senha do usuário admin

- **cypress.config.js** – Configuração principal do Cypress, incluindo baseUrl

## Pré-requisitos

- Node.js 18 ou superior
- npm (Node Package Manager)

## Instalação

1. Clone este repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd testeTiago
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Configuração de Ambiente

O arquivo `cypress.env.json` armazena as credenciais utilizadas nos testes. Exemplo:

```json
{
  "EMAIL_CORRECT": "tiagotest@gmail.com",
  "PASSWORD": "tiagoSenha@123",
  "PASSWORD_INVALID": "tiagoSenhaInvalida"
}
```

> **Importante:** Modifique conforme necessário para utilizar outros usuários em seus testes.

## Executando os Testes

### Modo Interativo (Cypress UI)
```bash
npm test
```

### Modo Headless (Terminal)
```bash
npx cypress run
```

### Executando apenas os testes de API
```bash
npx cypress run --spec "cypress/e2e/api/*.cy.js"
```

### Executando apenas os testes de Web
```bash
npx cypress run --spec "cypress/e2e/web/*.cy.js"
```

## Principais Tecnologias e Dependências

- [Cypress](https://www.cypress.io/) – Framework principal de automação
- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) – Geração de massa de dados dinâmica para evitar colisão e dependência de massa fixa

## Fluxos e Cobertura dos Testes

### Testes de API

- **Login:** Validação de autenticação, respostas de sucesso e erro
- **Usuários:** Criação, listagem e validações diversas para o endpoint `/usuarios`
- **Produtos:** Criação dinâmica de produtos, listagem e suporte a fluxo de estoque
- **Carrinhos:** Fluxo completo de criação, adição e exclusão de carrinho, sempre garantindo que exista produto em estoque válido antes de cada teste

### Testes de Web

- Login e cadastro, simulando cenários reais do usuário final na interface

## Boas Práticas Adotadas

- Separação clara entre comandos de API e de WEB
- Utilização de comandos customizados para facilitar manutenção e reuso
- Massa de dados dinâmica usando Faker
- Validação de token para todos os testes autenticados
- Limpeza e preparação de ambiente antes de cada teste de API (produtos criados dinamicamente)

## Observações

- Os testes de API utilizam a base oficial do ServeRest: [https://serverest.dev](https://serverest.dev)
- Caso precise executar contra uma instância local, altere o `baseUrl` no arquivo `cypress.config.js`
- Screenshots de falhas são gerados automaticamente na pasta `cypress/screenshots/`

## Autor

Teste técnico desenvolvido para o processo seletivo Squadra.  
**Autor:** _Tiago Duarte_

## Referências

- [ServeRest API – Documentação](https://serverest.dev/)
- [Cypress – Documentação Oficial](https://docs.cypress.io/)
