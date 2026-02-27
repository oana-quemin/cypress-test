const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");
const CartPage = require("../pages/CartPage");
const CheckoutPage = require("../pages/CheckoutPage");

describe("SauceDemo login and inventory", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  before(() => {
    loginPage.visit();
    loginPage.loginAs("standard_user", "secret_sauce");
    inventoryPage.verifyLoaded();
  });

  it("logs in with a standard user and shows inventory", () => {
    inventoryPage.verifyProductListVisible();
    inventoryPage.verifyProductNameVisible("Sauce Labs Backpack");
  });

  it.only("adds two items to cart and completes checkout", () => {
    inventoryPage.addItemToCartBySlug("sauce-labs-backpack");
    inventoryPage.addItemToCartBySlug("sauce-labs-bike-light");
    inventoryPage.verifyCartBadgeCount(2);
    inventoryPage.openCart();

    cartPage.verifyLoaded();
    cartPage.verifyItemInCart("Sauce Labs Backpack");
    cartPage.verifyItemInCart("Sauce Labs Bike Light");
    cartPage.clickCheckout();

    checkoutPage.verifyInformationStepLoaded();
    checkoutPage.fillInformation("Oana", "Quemin", "90210");
    checkoutPage.continueToOverview();
    checkoutPage.verifyOverviewStepLoaded();
    checkoutPage.finishCheckout();
    checkoutPage.verifyCheckoutComplete();
  });
});
