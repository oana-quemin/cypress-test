class CartPage {
  verifyLoaded() {
    cy.location("pathname", { timeout: 10000 }).should("eq", "/cart.html");
    cy.get('[data-test="cart-list"]').should("be.visible");
  }

  verifyItemInCart(itemName) {
    cy.contains('[data-test="inventory-item-name"]', itemName).should("be.visible");
  }

  clickCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}

module.exports = CartPage;

