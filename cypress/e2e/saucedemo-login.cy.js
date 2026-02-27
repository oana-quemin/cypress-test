const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");

describe("SauceDemo login and inventory", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  it("logs in with a standard user and shows inventory", () => {
    loginPage.visit();
    loginPage.loginAs("standard_user", "secret_sauce");

    inventoryPage.verifyLoaded();
    inventoryPage.verifyProductListVisible();
    inventoryPage.verifyProductNameVisible("Sauce Labs Backpack");
  });
});

