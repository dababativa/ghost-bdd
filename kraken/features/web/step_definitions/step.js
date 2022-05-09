const { Given, When, Then } = require("@cucumber/cucumber");
const { isObject } = require("lodash");
const expect = require('chai').expect;
// When("I enter email {kraken-string}", async function (email) {
//   let element = await this.driver.$("#email");

//   return await element.setValue(email);
// });

// When("I enter password {kraken-string}", async function (password) {
//   let element = await this.driver.$("#pass");

//   return await element.setValue(password);
// });
When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("input.email.ember-text-field");

  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("input.password.ember-text-field");

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
  let element = await this.driver.$('a[href="#/tags/"]');
  return await element.click();
})

Then('I click create tag', async function () {
  let element = await this.driver.$('a[href="#/tags/new/"]');
  return await element.click();
})

Then('I type tag name {string}', async function (tagName) {
  let element = await this.driver.$('input[name="name"]');
  return await element.setValue(tagName);
})

Then('I type tag slug {string}', async function (tagSlug) {
  let element = await this.driver.$('input[name="slug"]');
  return await element.setValue(tagSlug);
})

Then('I type tag description {string}', async function (tagDescription) {
  let element = await this.driver.$('textarea[name="description"]');
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

Then('I assert wrong password error message', async function () {
  let element = await this.driver.$('p.main-error')
  const elementText = await element.getText()
  expect(elementText.includes("Your password is incorrect.")).to.equal(true)
})

Then('I assert tag with slug {string} does not exist', async function (slug) {
  let element = await this.driver.$(`a[href="#/tags/${slug}/"]`);
  expect(isObject(element.error)).to.equal(true);
})

Then('I assert tag with slug {string} exists', async function (slug) {
  let element = await this.driver.$(`a[href="#/tags/${slug}/"]`);
  expect(element.error == undefined).to.equal(true);
})

//members
When("I click members", async function () {
  let element = await this.driver.$(".relative>a[href='#/members/'].ember-view");
  return await element.click();
});

When("I click new-member", async function () {
  let element = await this.driver.$("a[href='#/members/new/'].ember-view.gh-btn.gh-btn-primary");
  return await element.click();
});

When("I enter member-name {kraken-string}", async function (name) {
  try {
  let element = await this.driver.$("#member-name");
  return await element.setValue(name);
  }catch (error) {
  }
});

When("I enter member-email {kraken-string}", async function (email) {
  try {
  let element = await this.driver.$("#member-email");
  return await element.setValue(email);
  }catch (error) {
  }
});

When("I enter member-labels {kraken-string}", async function (label) {
  try {
  let element = await this.driver.$(".ember-power-select-multiple-options>.ember-power-select-trigger-multiple-input");
  return await element.setValue(label+' labels');
  }catch (error) {
  }
});

When("I enter member-note {kraken-string}", async function (label) {
  try {
  let element = await this.driver.$("#member-note");
  return await element.setValue(label+' notes');
  }catch (error) {
  }
});

When("I click save-member", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view");
  return await element.click();
});

When("I click recent-member", async function () {
  let element = await this.driver.$(".ma0.pa0.gh-members-list-name:first-child");
  return await element.click();
});

When("I edit member-note", async function () {
  let element = await this.driver.$("#member-note");
  return await element.setValue('Nota editada');
});

When("I click member-options", async function () {
  let element = await this.driver.$(".gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view");
  return await element.click();
});

When("I click delete-member", async function () {
  let element = await this.driver.$("ul.dropdown.gh-member-actions-menu.dropdown-menu.dropdown-triangle-top-right.open.fade-in-scale.open.ember-view>li>button.mr2>span.red");
  return await element.click();
});

When("I confirm delete-member", async function () {
  let element = await this.driver.$("div.modal-footer>button.gh-btn.gh-btn-red.gh-btn-icon.ember-view");
  return await element.click();
});

Then('I assert member eliminado {string} exists', async function (member) {
  let element = await this.driver.$(`//p[text() = '${member}']`);
  expect(isObject(element.error)).to.equal(true);
});


