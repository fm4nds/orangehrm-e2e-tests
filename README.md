# OrangeHRM E2E Tests

Projeto de testes automatizados E2E para a aplicação OrangeHRM usando Playwright.

## 🚀 Ferramentas

- **Playwright** - Framework de automação E2E
- **JavaScript** - Linguagem de programação
- **Page Object Model** - Padrão de arquitetura
- **GitHub Actions** - CI/CD Pipeline
- **GitHub Pages** - Relatórios online

## 📊 Relatórios Online

**Acesse os relatórios dos testes em tempo real:**
🌐 **[https://fm4nds.github.io/orangehrm-e2e-tests/](https://fm4nds.github.io/orangehrm-e2e-tests/)**

Os relatórios são atualizados automaticamente após cada execução dos testes na pipeline.

## 📁 Estrutura do Projeto

```
orangehrm-e2e-tests/
├── tests/
│   ├── elements/          # Seletores CSS centralizados
│   │   ├── LoginElements.js
│   │   └── newsfeedElements.js
│   ├── pages/             # Page Objects
│   │   ├── LoginPage.js
│   │   └── newsfeedPage.js
│   └── specs/             # Testes
│       ├── login.spec.js
│       └── newsfeed.spec.js
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml
├── playwright.config.js   # Configuração do Playwright
└── package.json
