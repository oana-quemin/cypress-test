class KitchenSinkPage {
  visitHome() {
    cy.visit("/");
  }

  verifyHomeLoaded() {
    cy.location("hostname").should("eq", "example.cypress.io");
    cy.contains("h1", "Kitchen Sink").should("be.visible");
  }

  visitCommandsActions() {
    cy.visit("/commands/actions");
  }

  verifyCommandsActionsLoaded() {
    cy.location("pathname", { timeout: 10000 }).should("include", "/commands/actions");
    cy.contains("h1", "Actions").should("be.visible");
  }

  visitUtilities() {
    cy.visit("/utilities");
  }

  verifyUtilitiesLoaded() {
    cy.location("pathname", { timeout: 10000 }).should("include", "/utilities");
    cy.contains("h1", "Utilities").should("be.visible");
  }

  visitCommandsNavigation() {
    cy.visit("/commands/navigation");
  }

  verifyCommandsNavigationLoaded() {
    cy.location("pathname", { timeout: 10000 }).should("include", "/commands/navigation");
    cy.contains("h1", "Navigation").should("be.visible");
  }
}

module.exports = KitchenSinkPage;

