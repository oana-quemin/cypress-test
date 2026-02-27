class InventoryPage {
  verifyLoaded() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/inventory.html");
    cy.get('[data-test="inventory-container"]').should("be.visible");
  }

  verifyProductListVisible() {
    cy.get('[data-test="inventory-item"]').should("have.length.greaterThan", 0);
  }

  verifyProductNameVisible(productName) {
    cy.contains('[data-test="inventory-item-name"]', productName).should("be.visible");
  }
}

module.exports = InventoryPage;

