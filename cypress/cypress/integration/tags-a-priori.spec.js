import { AdminPage, LoginPage, TagsPage } from "./pages";
describe("Tags functionalities a priori", () => {
  before(() => {
    cy.visit(Cypress.env("login_url"));
    self.loginPage = new LoginPage();
    self.adminPage = new AdminPage(
      Cypress.env("ghost_version"),
      Cypress.env("ghost_port")
    );
    self.tagsPage = new TagsPage(Cypress.env("ghost_version"));
    if (Cypress.env("ghost_version") == "4.42") {
      loginPage.login(Cypress.env("username"), Cypress.env("password"));
      cy.wait(3000);
      self.adminPage.clickTagsButton();
      cy.wait(1000);
      self.tagsPage.deleteAllExistingTags();
      cy.wait(1000);
      self.adminPage.signOut();
    }
  });

  beforeEach(() => {
    cy.visit(Cypress.env("login_url"));
    self.loginPage.login(Cypress.env("username"), Cypress.env("password"));
    cy.wait(2000);
    self.adminPage.clickTagsButton();
    cy.wait(2000);
  });
  it("Test create tag correctly", () => {
    cy.fixture("TAGS_MOCK_DATA_POSITIVE.json").then((data) => {
      const tag = data[0];
      self.tagsPage.clickCreateTagButton();
      cy.wait(1000);
      self.tagsPage.typeTagName(tag.name);
      cy.wait(1000);
      self.tagsPage.typeTagColor(tag.color.substring(1));
      cy.wait(1000);
      self.tagsPage.typeTagSlug(tag.slug);
      cy.wait(1000);
      self.tagsPage.typeTagDescription(tag.description);
      cy.wait(1000);
      self.tagsPage.clickSaveTagButton();
      cy.wait(1000);
      self.adminPage.clickTagsButton();
      cy.wait(1000);
      self.tagsPage.assertTagWithTagNameExists(tag.name);
      cy.wait(1000);
    });
  });
  it("Test create no name", () => {
    cy.fixture("TAGS_MOCK_DATA_POSITIVE.json").then((data) => {
      const tag = data[0];
      self.tagsPage.clickCreateTagButton();
      cy.wait(1000);
      self.tagsPage.typeTagColor(tag.color.substring(1));
      cy.wait(1000);
      self.tagsPage.typeTagSlug(tag.slug);
      cy.wait(1000);
      self.tagsPage.typeTagDescription(tag.description);
      cy.wait(1000);
      self.tagsPage.clickSaveTagButton();
      cy.wait(1000);
    });
  });
  it("Test create tag no slug", () => {
    cy.fixture("TAGS_MOCK_DATA_POSITIVE.json").then((data) => {
      const tag = data[0];
      self.tagsPage.clickCreateTagButton();
      cy.wait(1000);
      self.tagsPage.typeTagName(tag.name);
      cy.wait(1000);
      self.tagsPage.typeTagColor(tag.color.substring(1));
      cy.wait(1000);
      self.tagsPage.typeTagDescription(tag.description);
      cy.wait(1000);
      self.tagsPage.clickSaveTagButton();
      cy.wait(1000);
      self.adminPage.clickTagsButton();
      cy.wait(1000);
    });
  });

  it("Test create tag no description", () => {
    cy.fixture("TAGS_MOCK_DATA_POSITIVE.json").then((data) => {
      const tag = data[0];
      self.tagsPage.clickCreateTagButton();
      cy.wait(1000);
      self.tagsPage.typeTagName(tag.name);
      cy.wait(1000);
      self.tagsPage.typeTagColor(tag.color.substring(1));
      cy.wait(1000);
      self.tagsPage.typeTagSlug(tag.slug);
      cy.wait(1000);
      self.tagsPage.clickSaveTagButton();
      cy.wait(1000);
      self.adminPage.clickTagsButton();
      cy.wait(1000);
    });
  });

  it("Test create tag no color", () => {
    cy.fixture("TAGS_MOCK_DATA_POSITIVE.json").then((data) => {
      const tag = data[0];
      self.tagsPage.clickCreateTagButton();
      cy.wait(1000);
      self.tagsPage.typeTagName(tag.name);
      cy.wait(1000);
      self.tagsPage.typeTagSlug(tag.slug);
      cy.wait(1000);
      self.tagsPage.typeTagDescription(tag.description);
      cy.wait(1000);
      self.tagsPage.clickSaveTagButton();
      cy.wait(1000);
      self.adminPage.clickTagsButton();
      cy.wait(1000);
      self.tagsPage.assertTagWithTagNameExists(tag.name);
      cy.wait(1000);
    });
  });

  it("Test create tag strange name", () => {
    cy.fixture("TAGS_MOCK_DATA_POSITIVE.json").then((data) => {
      const tag = data[0];
      self.tagsPage.clickCreateTagButton();
      cy.wait(1000);
      self.tagsPage.typeTagName(
        tag.name + "!@#$%^&*()-_=+{}[]|\\''\"\";:.>,</?`~áéíóú´"
      );
      cy.wait(1000);
      self.tagsPage.typeTagColor(tag.color.substring(1));
      cy.wait(1000);
      self.tagsPage.typeTagSlug(tag.slug);
      cy.wait(1000);
      self.tagsPage.typeTagDescription(tag.description);
      cy.wait(1000);
      self.tagsPage.clickSaveTagButton();
      cy.wait(1000);
      self.adminPage.clickTagsButton();
      cy.wait(1000);
      self.tagsPage.assertTagWithTagNameExists(tag.name);
      cy.wait(1000);
    });
  });

  it("Test create tag strange slug", () => {
    cy.fixture("TAGS_MOCK_DATA_POSITIVE.json").then((data) => {
      const tag = data[0];
      self.tagsPage.clickCreateTagButton();
      cy.wait(1000);
      self.tagsPage.typeTagName(tag.name);
      cy.wait(1000);
      self.tagsPage.typeTagColor(tag.color.substring(1));
      cy.wait(1000);
      self.tagsPage.typeTagSlug(
        tag.slug + "!@#$%^&*()-_=+{}[]|\\''\"\";:.>,</?`~áéíóú´"
      );
      cy.wait(1000);
      self.tagsPage.typeTagDescription(tag.description);
      cy.wait(1000);
      self.tagsPage.clickSaveTagButton();
      cy.wait(1000);
      self.adminPage.clickTagsButton();
      cy.wait(1000);
      self.tagsPage.assertTagWithTagNameExists(tag.name);
      cy.wait(1000);
    });
  });

  it("Test create tag strange color", () => {
    cy.fixture("TAGS_MOCK_DATA_POSITIVE.json").then((data) => {
      const tag = data[0];
      self.tagsPage.clickCreateTagButton();
      cy.wait(1000);
      self.tagsPage.typeTagName(tag.name);
      cy.wait(1000);
      self.tagsPage.typeTagColor(
        tag.color + "!@#$%^&*()-_=+{}[]|\\''\"\";:.>,</?`~áéíóú´"
      );
      cy.wait(1000);
      self.tagsPage.typeTagSlug(tag.slug);
      cy.wait(1000);
      self.tagsPage.typeTagDescription(tag.description);
      cy.wait(1000);
      self.tagsPage.clickSaveTagButton();
      cy.wait(1000);
    });
  });

  it("Test create tag slug over limit", () => {
    cy.fixture("TAGS_MOCK_DATA_POSITIVE.json").then((data) => {
      const tag = data[0];
      self.tagsPage.clickCreateTagButton();
      cy.wait(1000);
      self.tagsPage.typeTagName(tag.name);
      cy.wait(1000);
      self.tagsPage.typeTagColor(tag.color.substring(1));
      cy.wait(1000);
      const slugLength = tag.slug.length;
      const slugModule = parseInt(191 / slugLength) + 1;
      const slug = tag.slug.repeat(slugModule);
      cy.log(slug);
      self.tagsPage.typeTagSlug(slug);
      cy.wait(1000);
      self.tagsPage.typeTagDescription(tag.description);
      cy.wait(1000);
      self.tagsPage.clickSaveTagButton();
      cy.wait(5000);
    });
  });
});
