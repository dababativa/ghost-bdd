export default class PagesPage {

    constructor() {
    }

    getPageSectionButton() {
        return cy.get('a[href="#/pages/"]')
    }

    clickPageSectionButton() {
        return this.getPageSectionButton().click()
    }
    
    getNewPageButton() {
        return cy.get('a[href="#/editor/page/"]')
    }
    
    clickNewPageButton() {
        return this.getNewPageButton().click()
    }
    
    getPageNameInput() {
        return cy.get('textarea.gh-editor-title')
    }
    
    clearPageName() {
    	this.getPageNameInput().clear()
    }
    
    typePageName(pageName) {
        return this.getPageNameInput().type(`${pageName}`)
    }
    
    getPageTextInput() {
        return cy.get('div.koenig-editor__editor')
    }
    
    clearPageText() {
    	this.getPageTextInput().clear()
    }
    
    typePageText(pageText) {
        return this.getPageTextInput().type(`${pageText}`)
    }
    
    getPublishMenu() {
    	return cy.get('div.gh-publishmenu span').first()
    }
    
    clickPublishMenu() {
        return this.getPublishMenu().click()
    }
    
    getPublishButton() {
    	return cy.get('button.gh-publishmenu-button span')
    }
    
    clickPublishButton() {
        return this.getPublishButton().click()
    }
    
    getFirstPageItem() {
    	return cy.get('li.gh-posts-list-item > a.ember-view.permalink.gh-list-data.gh-post-list-title').first()
    }
    
    clickFirstPageItem() {
        return this.getFirstPageItem().click()
    }
    
    getPageMenuNew() {
    	return cy.get('.settings-menu-toggle > span')
    }

    getPageMenuOld() {
    	return cy.get('.post-settings > svg')
    }
    
    clickPageMenuNew() {
        return this.getPageMenuNew().click()
    }

    clickPageMenuOld() {
        return this.getPageMenuOld().click()
    }
    
    getPageDeleteButton() {
    	return cy.get('button.settings-menu-delete-button')
    }
    
    clickPageDeleteButton() {
        return this.getPageDeleteButton().click()
    }
    
    getConfirmDeleteButton() {
    	return cy.get('button.gh-btn-red > span')
    }
    
    clickConfirmDeleteButton() {
        return this.getConfirmDeleteButton().click()
    }
    
    getUnpublishRadioButton() {
    	return cy.get('div.gh-publishmenu-radio-button').first()
    }
    
    clickUnpublishRadioButton() {
        return this.getUnpublishRadioButton().click()
    }

    takeScreenshot(screenshotName) {
        return cy.screenshot(`${screenshotName}`)
    }
    
    visitPage(pageTitle) {
    	cy.visit(`http://localhost:2368/${pageTitle}`, {failOnStatusCode: false})
    }
    
    assertPageExistsNew(pageName) {
        return expect(cy.get('h1.article-title').contains(pageName)).to.exist
    }

    assertPageExistsOld(pageName) {
        return expect(cy.get('h1.post-full-title').contains(pageName)).to.exist
    }
    
    assertPageNotExists() {
        return expect(cy.get('h1.error-code').contains('404')).to.exist
    }

}
