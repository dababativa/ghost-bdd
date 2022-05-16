const { Given, When, Then } = require("@cucumber/cucumber");
const { isObject } = require("lodash");
const expect = require("chai").expect;

//Login

let version = undefined;
Given("I am using version {kraken-string}", async function (ghostVersion) {
  version = ghostVersion;
});

Given("I navigate to ghost on port {kraken-string}", async function (port) {
  this.driver.url(`http://localhost:${port}/ghost`);
});

When("I enter email {kraken-string}", async function (email) {
  console.log(version);
  let element = await this.driver.$("input.email.ember-text-field");

  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("input.password.ember-text-field");

  return await element.setValue(password);
});

Then("I assert wrong password error message", async function () {
  let element = await this.driver.$("p.main-error");
  const elementText = await element.getText();
  expect(elementText.includes("Your password is incorrect.")).to.equal(true);
});

When("I take Screenshot1", async function () {
  await this.driver.saveScreenshot("./screenshots/login/login-screen1.png");
});

When("I click next", async function () {
  let element = await this.driver.$(
    // "button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view"
    "button[type='submit']"
  );

  return await element.click();
});

When("I take Screenshot2", async function () {
  await this.driver.saveScreenshot("./screenshots/login/login-screen2.png");
});

Then("I take a login Screenshot {string}", async function (imgName) {
  let path = `./screenshots/login/${await imgName}.png`;
  return await this.driver.saveScreenshot(path);
});

Then("I click on the first conversation", async function () {
  let element = await this.driver.$(
    ".i224opu6 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)"
  );

  return await element.click();
});

Then("I click on the redact message inputbox", async function () {
  let element = await this.driver.$("p.kvgmc6g5");

  return await element.click();
});

Then("I send the message", async function () {
  let element = await this.driver.$(
    "span.tojvnm2t:nth-child(3) > div:nth-child(1)"
  );

  return await element.click();
});

//Tags

Then("I click tags", async function () {
  let element = await this.driver.$('a[href="#/tags/"]');
  await element.click();
  await this.driver.saveScreenshot("./screenshots/tags/tags-list-kraken.png");
});

Then("I click create tag", async function () {
  let element = await this.driver.$('a[href="#/tags/new/"]');
  return await element.click();
});

Then("I type tag name {string}", async function (tagName) {
  let element = await this.driver.$('input[name="name"]');
  return await element.setValue(tagName);
});

Then("I type tag slug {string}", async function (tagSlug) {
  let element = await this.driver.$('input[name="slug"]');
  return await element.setValue(tagSlug);
});

Then("I type tag description {string}", async function (tagDescription) {
  let element = await this.driver.$('textarea[name="description"]');
  return await element.setValue(tagDescription);
});

Then("I click save tag", async function () {
  const selector =
    version == 4.42
      ? "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view"
      : "button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view";
  await this.driver.saveScreenshot("./screenshots/tags/save-tag-kraken.png");
  let element = await this.driver.$(selector);
  return await element.click();
});

Then("I open the tag with slug {string}", async function (slug) {
  await this.driver.saveScreenshot("./screenshots/tags/open-tag-kraken.png");
  let element = await this.driver.$(`a[href="#/tags/${slug}/"]`);
  return await element.click();
});

Then("I click delete current tag", async function () {
  await this.driver.saveScreenshot("./screenshots/tags/delete-tag-kraken.png");
  let element = await this.driver.$("button.gh-btn.gh-btn-red.gh-btn-icon");
  return await element.click();
});

Then("I cancel deleting tag", async function () {
  let element = await this.driver.$("button.gh-btn");
  return await element.click();
});

Then("I confirm deleting tag", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view"
  );
  return await element.click();
});

Then("I click internal tags", async function () {
  let element = await this.driver.$(
    "div.gh-contentfilter.gh-btn-group button.gh-btn"
  );
  return await element.click();
});


Then("I assert tag with slug {string} does not exist", async function (slug) {
  let element = await this.driver.$(`a[href="#/tags/${slug}/"]`);
  expect(isObject(element.error)).to.equal(true);
});

Then("I assert tag with slug {string} exists", async function (slug) {
  let element = await this.driver.$(`a[href="#/tags/${slug}/"]`);
  expect(element.error == undefined).to.equal(true);
});

//Post

Then("I click posts", async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click();
});

Then("I click new post", async function () {
  let element = await this.driver.$('a[href="#/editor/post/"]');
  return await element.click();
});
Then("I type a title {string}", async function (titlePost) {
  let selector = 
    version == 4.42
      ? 'textarea[placeholder="Post title"]'
      : 'textarea[placeholder="Post Title"]';
  let element = await this.driver.$(selector);
  return await element.setValue(titlePost);
});
Then("I write a body {string}", async function (titleBody) {
  let element = await this.driver.$(
    'div[data-placeholder="Begin writing your post..."]'
  );
  return await element.setValue(titleBody);
});
Then("I click to publish", async function () {
  let element = await this.driver.$(".gh-publishmenu-trigger");
  return await element.click();
});
Then("I publish the post", async function () {
  let element = await this.driver.$(".gh-publishmenu-button");
  return await element.click();
});
Then("I click confirm", async function () {
  if(version == 4.42){
    let element = await this.driver.$(".gh-btn-black");
    return await element.click();
  }  
});
Then("I back to posts list", async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click();
});
Then("I click a post", async function () {
  let element = await this.driver.$(".gh-post-list-title");
  return await element.click();
});
Then("I click settings", async function () {
  let selector = 
  version == 4.42
    ? '.settings-menu-toggle'
    : '.post-settings';
  let element = await this.driver.$(selector);
  return await element.click();
});
Then("I delete the post", async function () {
  let element = await this.driver.$(".settings-menu-delete-button");
  return await element.click();
});
Then("I confirm delete", async function () {
  let element = await this.driver.$(".gh-btn-red");
  return await element.click();
});

Then("I open calendar", async function () {
  let element = await this.driver.$(".gh-date-time-picker-date ");
  return await element.click();
});
Then("I select a date", async function () {
  let element = await this.driver.$('button[data-date="2022-05-20"]');
  return await element.click();
});
Then("I click scheduled", async function () {
  let element = await this.driver.$('a[href="#/posts/?type=scheduled"]');
  return await element.click();
});

Given("I navigate to post {kraken-string}", async function (post) {
  let port = 
    version == 4.42
      ? "2368"
      : "3001"
  this.driver.url(`http://localhost:${port}/${post}`);
});

Given("I navigate to post list", async function () {
  let port = 
    version == 4.42
      ? "2368"
      : "3001"
  this.driver.url(`http://localhost:${port}/ghost/#/posts`);
});
Then("I take a post Screenshot {string}", async function (imgName) {
  let path = `./screenshots/posts/${await imgName}.png`;
  return await this.driver.saveScreenshot(path);
});
Then('I assert post with title {string} exists', async function (postTitle) {
  let selector = 
  version == 4.42
    ? 'h1.article-title'
    : 'h1.post-full-title';
  let element = await this.driver.$(selector);
  const elementText = await element.getText();
  expect(elementText == postTitle).to.equal(true);
})

Then('I assert post does no exist', async function () {
  let element = await this.driver.$('.error-code');
  const elementText = await element.getText();
  console.log("Texto2 "+elementText);
  expect(elementText.includes(404)).to.equal(true);
})
Then('I assert post {string} exist', async function (postTitle) {
  let element = await this.driver.$('.gh-content-entry-title=Post para programar');
  const elementText = await element.getText();
  console.log(elementText);
  expect(postTitle==elementText).to.equal(true);
})
Then('I assert post was edited with {string}', async function (postNameNew) {
  let selector = 
  version == 4.42
    ? 'textarea[placeholder="Post title"]'
    : 'textarea[placeholder="Post Title"]';
  let element = await this.driver.$(selector);
  const elementText = await element.getText();
  console.log(elementText);
  expect(elementText==postNameNew).to.equal(false);
})
Then('I assert error message {string}', async function (errorText) {
  let element = await this.driver.$('.main-error');
  const elementText = await element.getText();
  console.log("Texto1 "+errorText);
  console.log("Texto2 "+elementText);
  expect(elementText.includes(errorText)).to.equal(true);
})

// Pages

Then("I click on pages", async function () {
  let element = await this.driver.$('a[href="#/pages/"]');
  return await element.click();
});

Then("I click on new page", async function () {
  let element = await this.driver.$('a[href="#/editor/page/"]');
  return await element.click();
});

Then("I type a page title {string}", async function (pageTitle) {
  let element = await this.driver.$('textarea[placeholder="Page title"]');
  return await element.setValue(pageTitle);
});

Then("I type a page body {string}", async function (pageBody) {
  let element = await this.driver.$('div[contentedtible="true"]');
  return await element.setValue(pageBody);
});

Then("I click on publish menu", async function () {
  let element = await this.driver.$("div.ember-view span");
  return await element.click();
});

Then("I click on publish button", async function () {
  let element = await this.driver.$("button.gh-publishmenu-button span");
  return await element.click();
});

Then("I open the first page on the list", async function (slug) {
  let element = await this.driver.$("li.gh-posts-list-item > a");
  return await element.first().click();
});

Then("I click on the page menu", async function () {
  let element = await this.driver.$(".settings-menu-toggle > span");
  return await element.click();
});

Then("I click on the delete page button", async function () {
  let element = await this.driver.$("button.settings-menu-delete-button");
  return await element.click();
});

Then("I click on the confirmation delete page button", async function () {
  let element = await this.driver.$(".gh-btn-red > span");
  return await element.click();
});

Then("I click on the unplublish radio button", async function () {
  let element = await this.driver.$("div.gh-publishmenu-radio-button");
  return await element.first().click();
});

Then("I click on the unplublish radio button", async function () {
  let element = await this.driver.$("div.gh-publishmenu-radio-button");
  return await element.first().click();
});

Then("I assert page with title {string} exists", async function (pageTitle) {
  let element = await this.driver.$("h1.article-title");
  const elementText = await element.getText();
  expect(elementText == pageTitle).to.equal(true);
});

Then("I assert 404 error code appears", async function () {
  let element = await this.driver.$("h1.error-code");
  const elementText = await element.getText();
  expect(elementText == "404").to.equal(true);
});

//members
When("I click members", async function () {
  let element = await this.driver.$(
    ".relative>a[href='#/members/'].ember-view"
  );
  return await element.click();
});

When("I take member-create screenshot1", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/create/list-members-screen.png"
  );
});

When("I click new-member", async function () {
  let element = await this.driver.$(
    "a[href='#/members/new/'].ember-view.gh-btn.gh-btn-primary"
  );
  return await element.click();
});

When("I enter member-name {kraken-string}", async function (name) {
  try {
    let element = await this.driver.$("#member-name");
    return await element.setValue(name);
  } catch (error) {}
});

When("I enter member-email {kraken-string}", async function (email) {
  try {
    let element = await this.driver.$("#member-email");
    return await element.setValue(email);
  } catch (error) {}
});

When("I enter member-labels {kraken-string}", async function (label) {
  try {
    let element = await this.driver.$(
      ".ember-power-select-multiple-options>.ember-power-select-trigger-multiple-input"
    );
    return await element.setValue(label + " labels");
  } catch (error) {}
});

When("I enter member-note {kraken-string}", async function (label) {
  try {
    let element = await this.driver.$("#member-note");
    return await element.setValue(label + " notes");
  } catch (error) {}
});

When("I take member-create screenshot2", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/create/new-member-screen.png"
  );
});

When("I click save-member", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view"
  );
  return await element.click();
});

When("I take member-create screenshot3", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/create/new-member-created-screen.png"
  );
});

When("I click recent-member", async function () {
  let element = await this.driver.$(
    ".ma0.pa0.gh-members-list-name:first-child"
  );
  return await element.click();
});

When("I edit member-note", async function () {
  let element = await this.driver.$("#member-note");
  return await element.setValue("Nota editada");
});

When("I click member-options", async function () {
  let element = await this.driver.$(
    ".gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"
  );
  return await element.click();
});

When("I click delete-member", async function () {
  let element = await this.driver.$(
    "ul.dropdown.gh-member-actions-menu.dropdown-menu.dropdown-triangle-top-right.open.fade-in-scale.open.ember-view>li>button.mr2>span.red"
  );
  return await element.click();
});

When("I confirm delete-member", async function () {
  let element = await this.driver.$(
    "div.modal-footer>button.gh-btn.gh-btn-red.gh-btn-icon.ember-view"
  );
  return await element.click();
});

When("I take member-edit screenshot1", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/edit/new-member-screen.png"
  );
});

When("I take member-edit screenshot2", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/edit/list-member-created-screen.png"
  );
});

When("I take member-edit screenshot3", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/edit/edit-member-screen.png"
  );
});

When("I take member-edit screenshot4", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/edit/edited-member-screen.png"
  );
});

When("I take member-delete screenshot1", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/delete/new-member-screen.png"
  );
});

When("I take member-delete screenshot2", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/delete/list-member-screen.png"
  );
});

When("I take member-delete screenshot3", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/delete/delete-member-screen.png"
  );
});

When("I take member-delete screenshot4", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/delete/deleted-member-screen.png"
  );
});

When("I take member-show screenshot1", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/show/new-member-screen.png"
  );
});

When("I take member-show screenshot2", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/show/list-member-screen.png"
  );
});

When("I take member-show screenshot3", async function () {
  await this.driver.saveScreenshot(
    "./screenshots/member/show/show-member-screen.png"
  );
});

Then("I assert member eliminado {string} exists", async function (member) {
  let element = await this.driver.$(`//p[text() = '${member}']`);
  expect(isObject(element.error)).to.equal(true);
});
