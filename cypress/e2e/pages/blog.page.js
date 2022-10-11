const header='div>h1';

class BlogPage{
    
    open(){
        cy.visit('/learn');
    }

    get getHeader(){
        return cy.get(header);
    }

    clickOnLearnElement(name){
        cy.contains('h3', name).click();
    }

}
export default new BlogPage();