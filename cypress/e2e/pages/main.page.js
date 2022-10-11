
const listButtonHeader='nav>div+div button, a[href*="network"]>span';
const listBtnInMenu='nav span';
const emailInput='[name="email"]';
const tryForFree='[type="submit"]';
const signUp='ul>div>a'
const acceptandClose='[aria-label*="close"]~div button';
const openMenu='[aria-label="Open menu"]';
const talkExpert='nav a[href*="contact"]';

class MainPage {

    open(){
        cy.visit('/');
    }

    get listBtnInMenu(){
        return cy.get(listBtnInMenu);
    }

    get listHeader(){
        return cy.get(listButtonHeader);
    }
    
    get email() {
        return cy.get(emailInput);
    }

    clickOnButtonMenu(name){
        cy.contains('nav a, nav button', name).click();
    }

    clickOnLinks(name){       
        cy.get(`li>a[href*=${name.toLowerCase()}]`).invoke('removeAttr', 'target').click();  
    }
   
    clickAcceptAndClose() {
      cy.get(acceptandClose).click();
    }

    clickSignUp() {
        cy.get(signUp).click();        
    }

    enterEmail(email) {
        cy.get(emailInput).type(email);
    }

    clickTryForFree() {
        cy.get(tryForFree).click();
    }

    clickOpenMenu(){
        cy.get(openMenu).click();
    }
}
export default new MainPage();
