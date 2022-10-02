class BlogPage{
    
    open(){
        cy.visit('/learn');
    }

    get getHeader(){
        return cy.xpath('//h1');
    }

    clickOnLearnElement(name){
        cy.xpath('//main//*[text()="'+name+'"]').scrollIntoView().click();
    }

}
export default new BlogPage();