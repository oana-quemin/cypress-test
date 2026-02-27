# cypress-test

Cypress project using a Page Object Model on [SauceDemo](https://www.saucedemo.com/).

## Setup

```bash
npm install
```

## Run tests headless

```bash
npm run cy:run
```

This runs `cypress/e2e/saucedemo-login.cy.js`, which logs in with:
- Username: `standard_user`
- Password: `secret_sauce`

## Run tests in Chrome
```bash
npx cypress run --headed --browser chrome
```

or

```bash
npm run cy:chrome
```

## Run a particular test class in Chrome
```bash
npx cypress run --headed --browser chrome --spec "cypress/e2e/saucedemo-login.cy.js"
```

## Open Cypress UI

```bash
npm run cy:open
```
