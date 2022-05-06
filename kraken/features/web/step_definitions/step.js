const { Given, When, Then } = require("@cucumber/cucumber");

// When("I enter email {kraken-string}", async function (email) {
//   let element = await this.driver.$("#email");

//   return await element.setValue(email);
// });

// When("I enter password {kraken-string}", async function (password) {
//   let element = await this.driver.$("#pass");

//   return await element.setValue(password);
// });
When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#ember7");

  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#ember9");

  return await element.setValue(password);
});

When("I click next", async function () {
  let element = await this.driver.$("#ember11");

  return await element.click();
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

Then('I click tags', async function () {
  let element = await this.driver.$('#ember29');
  return await element.click();
})

Then('I click create tag', async function () {
  let element = await this.driver.$('#ember71');
  return await element.click();
})

Then('I type tag name {string}', async function (tagName) {
  let element = await this.driver.$('#tag-name');
  return await element.setValue(tagName);
})

Then('I type tag slug {string}', async function (tagSlug) {
  let element = await this.driver.$('#tag-slug');
  return await element.setValue(tagSlug);
})

Then('I type tag description {string}', async function (tagDescription) {
  let element = await this.driver.$('#tag-description');
  return await element.setValue(tagDescription);
})

Then('I click save tag', async function () {
  let element = await this.driver.$('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
  return await element.click();
})

Then('I open the tag with slug {string}', async function (slug) {
  let element = await this.driver.$(`a[href="#/tags/${slug}/"]`);
  return await element.click();
})

Then('I click delete current tag', async function () {
  let element = await this.driver.$('button.gh-btn.gh-btn-red.gh-btn-icon');
  return await element.click();
})

Then('I cancel deleting tag', async function () {
  let element = await this.driver.$('button.gh-btn');
  return await element.click();
})

Then('I confirm deleting tag', async function () {
  let element = await this.driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
  return await element.click();
})