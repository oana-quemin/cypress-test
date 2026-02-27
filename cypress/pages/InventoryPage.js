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

  addItemToCartBySlug(itemSlug) {
    cy.get(`[data-test="add-to-cart-${itemSlug}"]`).click();
  }

  verifyCartBadgeCount(count) {
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", String(count));
  }

  openCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }
}

module.exports = InventoryPage;
