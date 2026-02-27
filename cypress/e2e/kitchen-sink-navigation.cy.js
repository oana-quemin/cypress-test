const KitchenSinkPage = require("../pages/KitchenSinkPage");

describe("Cypress Kitchen Sink navigation", () => {
  const kitchenSinkPage = new KitchenSinkPage();

  it("visits key sections from the home page", () => {
    kitchenSinkPage.visitHome();
    kitchenSinkPage.verifyHomeLoaded();

    kitchenSinkPage.visitCommandsActions();
    kitchenSinkPage.verifyCommandsActionsLoaded();

    kitchenSinkPage.visitUtilities();
    kitchenSinkPage.verifyUtilitiesLoaded();

    kitchenSinkPage.visitCommandsNavigation();
    kitchenSinkPage.verifyCommandsNavigationLoaded();
  });
});
