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
  let element = await this.driver.$(`a[href="#/tags/${slug}/"]`).first();
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

Then('I click internal tags', async function () {
  let element = await this.driver.$('div.gh-contentfilter.gh-btn-group button.gh-btn');
  return await element.click();
})

Then('I click posts', async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click();
})

Then('I click new post', async function () {
  let element = await this.driver.$('a[href="#/editor/post/"]');
  return await element.click();
})
Then('I type a title {string}', async function (titlePost) {
  let element = await this.driver.$('textarea[placeholder="Post title"]');
  return await element.setValue(titlePost);
})
Then('I write a body {string}', async function (titleBody) {
  let element = await this.driver.$('div[data-placeholder="Begin writing your post..."]');
  return await element.setValue(titleBody);
})
Then('I click to publish', async function () {
  let element = await this.driver.$('.gh-publishmenu-trigger');
  return await element.click();
})
Then('I publish the post', async function () {
  let element = await this.driver.$('.gh-publishmenu-button');
  return await element.click();
})
Then('I click confirm', async function () {
  let element = await this.driver.$('.gh-btn-black');
  return await element.click();
})
Then('I back to posts list', async function () {
  let element = await this.driver.$('.gh-editor-back-button');
  return await element.click();
})
Then('I click a post', async function () {
  let element = await this.driver.$('.gh-post-list-title');
  return await element.click();
})
Then('I click settings', async function () {
  let element = await this.driver.$('.settings-menu-toggle');
  return await element.click();
})
Then('I delete the post', async function () {
  let element = await this.driver.$('.settings-menu-delete-button');
  return await element.click();
})
Then('I confirm delete', async function () {
  let element = await this.driver.$('.gh-btn-red');
  return await element.click();
})
Then('I open calendar', async function () {
  let element = await this.driver.$('.gh-date-time-picker-date ');
  return await element.click();
})
Then('I select a date', async function () {
  let element = await this.driver.$('button[data-date="2022-05-20"]');
  return await element.click();
})
Then('I click scheduled', async function () {
  let element = await this.driver.$('a[href="#/posts/?type=scheduled"]');
  return await element.click();
})
Then('I assert post with title {string} exists', async function (postTitle) {
  let element = await this.driver.$('h1.article-title');
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
  let element = await this.driver.$('textarea[placeholder="Post title"]');
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


