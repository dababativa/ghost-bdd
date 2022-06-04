import { AdminPage, LoginPage, TagsPage } from "./pages";

const faker = require("faker");
// faker.seed(2062022)
describe("Tags functionalities random", () => {
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
    self.data = Cypress._.range(1, 11).map((_, k) => {
      return {
        name: faker.name.findName(),
        slug: faker.random.word(),
        color: Math.floor(Math.random() * 16777215).toString(16),
        description: faker.lorem.paragraphs(1, false),
      };
    });
    cy.log(faker.random.words());
    cy.log(self.data[0], "the self dot data");
  });

  beforeEach(() => {
    cy.visit(Cypress.env("login_url"));
    self.loginPage.login(Cypress.env("username"), Cypress.env("password"));
    cy.wait(2000);
    self.adminPage.clickTagsButton();
    cy.wait(2000);
  });

  it("Test edit tag strange name", () => {
    const tag = self.data[5];
    self.tagsPage.clickCreateTagButton();
    cy.wait(1000);
    self.tagsPage.typeTagName("Editable tag");
    cy.wait(1000);
    self.tagsPage.typeTagSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagDescription(
      "This is the description of a new tag created that will then be edited using cypress"
    );
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(1000);
    self.tagsPage.openTagWithSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagName(
      tag.name + "!@#$%^&*()-_=+{}[]|\\''\"\";:.>,</?`~áéíóú´"
    );
    cy.wait(1000);
    self.tagsPage.typeTagSlug(tag.slug);
    cy.wait(1000);
    self.tagsPage.typeTagDescription(tag.description);
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(5000);
  });

  it("Test edit tag strange slug", () => {
    const tag = self.data[5];
    self.tagsPage.clickCreateTagButton();
    cy.wait(1000);
    self.tagsPage.typeTagName("Editable tag");
    cy.wait(1000);
    self.tagsPage.typeTagSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagDescription(
      "This is the description of a new tag created that will then be edited using cypress"
    );
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(1000);
    self.tagsPage.openTagWithSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagName(tag.name);
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
    cy.wait(5000);
  });

  it("Test edit tag slug over limit", () => {
    const tag = self.data[5];
    self.tagsPage.clickCreateTagButton();
    cy.wait(1000);
    self.tagsPage.typeTagName("Editable tag");
    cy.wait(1000);
    self.tagsPage.typeTagSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagDescription(
      "This is the description of a new tag created that will then be edited using cypress"
    );
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(1000);
    self.tagsPage.openTagWithSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagName(tag.name);
    cy.wait(1000);
    const slugLength = tag.slug.length;
    const slugModule = parseInt(191 / slugLength) + 1;
    const slug = tag.slug.repeat(slugModule);
    self.tagsPage.typeTagSlug(slug);
    cy.wait(1000);
    self.tagsPage.typeTagDescription(tag.description);
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(5000);
  });
  it("Test edit tag description over limit", () => {
    const tag = self.data[5];
    self.tagsPage.clickCreateTagButton();
    cy.wait(1000);
    self.tagsPage.typeTagName("Editable tag");
    cy.wait(1000);
    self.tagsPage.typeTagSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagDescription(
      "This is the description of a new tag created that will then be edited using cypress"
    );
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(1000);
    self.tagsPage.openTagWithSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagName(tag.name);
    cy.wait(1000);
    self.tagsPage.typeTagSlug(tag.slug);
    cy.wait(1000);
    const descriptionLength = tag.description.length;
    const descriptionModule = parseInt(501 / descriptionLength) + 1;
    const description = tag.description.repeat(descriptionModule);
    self.tagsPage.typeTagDescription(description);
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(5000);
  });
  it("Test edit tag name over limit", () => {
    const tag = self.data[5];
    self.tagsPage.clickCreateTagButton();
    cy.wait(1000);
    self.tagsPage.typeTagName("Editable tag");
    cy.wait(1000);
    self.tagsPage.typeTagSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagDescription(
      "This is the description of a new tag created that will then be edited using cypress"
    );
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(1000);
    self.tagsPage.openTagWithSlug("slug");
    cy.wait(1000);
    const nameLength = tag.name.length;
    const nameModule = parseInt(191 / nameLength) + 1;
    const name = tag.name.repeat(nameModule);
    self.tagsPage.typeTagName(name);
    cy.wait(1000);
    self.tagsPage.typeTagSlug(tag.slug);
    cy.wait(1000);
    self.tagsPage.typeTagDescription(tag.description);
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(5000);
  });

  it("Test edit tag slug on limit", () => {
    const tag = self.data[5];
    self.tagsPage.clickCreateTagButton();
    cy.wait(1000);
    self.tagsPage.typeTagName("Editable tag");
    cy.wait(1000);
    self.tagsPage.typeTagSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagDescription(
      "This is the description of a new tag created that will then be edited using cypress"
    );
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(1000);
    self.tagsPage.openTagWithSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagName(tag.name);
    cy.wait(1000);
    const slugLength = tag.slug.length;
    const slugModule = parseInt(191 / slugLength) + 1;
    const slug = tag.slug.repeat(slugModule).substring(0, 191);
    self.tagsPage.typeTagSlug(slug);
    cy.wait(1000);
    self.tagsPage.typeTagDescription(tag.description);
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(5000);
  });
  it("Test edit tag description on limit", () => {
    const tag = self.data[5];
    self.tagsPage.clickCreateTagButton();
    cy.wait(1000);
    self.tagsPage.typeTagName("Editable tag");
    cy.wait(1000);
    self.tagsPage.typeTagSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagDescription(
      "This is the description of a new tag created that will then be edited using cypress"
    );
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(1000);
    self.tagsPage.openTagWithSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagName(tag.name);
    cy.wait(1000);
    self.tagsPage.typeTagSlug(tag.slug);
    cy.wait(1000);
    const descriptionLength = tag.description.length;
    const descriptionModule = parseInt(501 / descriptionLength) + 1;
    const description = tag.description
      .repeat(descriptionModule)
      .substring(0, 500);
    self.tagsPage.typeTagDescription(description);
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(5000);
  });
  it("Test edit tag name on limit", () => {
    const tag = self.data[5];
    self.tagsPage.clickCreateTagButton();
    cy.wait(1000);
    self.tagsPage.typeTagName("Editable tag");
    cy.wait(1000);
    self.tagsPage.typeTagSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagDescription(
      "This is the description of a new tag created that will then be edited using cypress"
    );
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(1000);
    self.tagsPage.openTagWithSlug("slug");
    cy.wait(1000);
    const nameLength = tag.name.length;
    const nameModule = parseInt(191 / nameLength) + 1;
    const name = tag.name.repeat(nameModule).substring(0, 191);
    self.tagsPage.typeTagName(name);
    cy.wait(1000);
    self.tagsPage.typeTagSlug(tag.slug);
    cy.wait(1000);
    self.tagsPage.typeTagDescription(tag.description);
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(5000);
  });
  it("Test edit tag blank", () => {
    const tag = self.data[5];
    self.tagsPage.clickCreateTagButton();
    cy.wait(1000);
    self.tagsPage.typeTagName("Editable tag");
    cy.wait(1000);
    self.tagsPage.typeTagSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagDescription(
      "This is the description of a new tag created that will then be edited using cypress"
    );
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(1000);
    self.tagsPage.openTagWithSlug("slug");
    cy.wait(1000);
    self.tagsPage.typeTagName(" ");
    cy.wait(1000);
    self.tagsPage.typeTagSlug(" ");
    cy.wait(1000);
    self.tagsPage.typeTagDescription(" ");
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
    self.adminPage.clickTagsButton();
    cy.wait(5000);
  });

  it("Test create tag slug over limit", () => {
    const tag = self.data[0];
    self.tagsPage.clickCreateTagButton();
    cy.wait(1000);
    self.tagsPage.typeTagName(tag.name);
    cy.wait(1000);
    self.tagsPage.typeTagColor(tag.color.substring(1));
    cy.wait(1000);
    const slugLength = tag.slug.length;
    const slugModule = parseInt(192 / slugLength) + 1;
    const slug = tag.slug.repeat(slugModule);
    self.tagsPage.typeTagSlug(slug);
    cy.wait(1000);
    self.tagsPage.typeTagDescription(tag.description);
    cy.wait(1000);
    self.tagsPage.clickSaveTagButton();
    cy.wait(1000);
  });
});
