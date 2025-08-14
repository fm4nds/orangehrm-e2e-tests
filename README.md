# OrangeHRM E2E Tests
Automated E2E testing project for the OrangeHRM application using Playwright.

## 🚀 Tools
- **Playwright** – E2E automation framework  
- **JavaScript** – Programming language  
- **Page Object Model** – Architecture pattern  
- **GitHub Actions** – CI/CD pipeline  
- **GitHub Pages** – Online reports
  
## 📊 Online Reports
**Access real-time test reports:**  
🌐 **[https://fm4nds.github.io/orangehrm-e2e-tests/](https://fm4nds.github.io/orangehrm-e2e-tests/)**
Reports are automatically updated after each test execution in the pipeline.

## 📁 Project Structure

```
orangehrm-e2e-tests/
├── tests/
│   ├── elements/          # Centralized CSS
│   │   ├── LoginElements.js
│   │   └── newsfeedElements.js
│   ├── pages/             # Page Objects
│   │   ├── LoginPage.js
│   │   └── newsfeedPage.js
│   └── specs/             # Tests
│       ├── login.spec.js
│       └── newsfeed.spec.js
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml
├── playwright.config.js   # Playwright Configuration
└── package.json
