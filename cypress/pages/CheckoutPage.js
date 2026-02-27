class CheckoutPage {
  verifyInformationStepLoaded() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/checkout-step-one.html");
    cy.get('[data-test="checkout-info-container"]').should("be.visible");
  }

  fillInformation(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').clear().type(firstName);
    cy.get('[data-test="lastName"]').clear().type(lastName);
    cy.get('[data-test="postalCode"]').clear().type(postalCode);
  }

  continueToOverview() {
    cy.get('[data-test="continue"]').click();
  }

  verifyOverviewStepLoaded() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/checkout-step-two.html");
    cy.get('[data-test="checkout-summary-container"]').should("be.visible");
  }

  finishCheckout() {
    cy.get('[data-test="finish"]').click();
  }

  verifyCheckoutComplete() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/checkout-complete.html");
    cy.get('[data-test="complete-header"]').should("contain.text", "Thank you for your order");
  }
}

module.exports = CheckoutPage;

