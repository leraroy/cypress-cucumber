import accountData from "../helper/account.data";

const termsAndCondition = '[aria-labelledby*="terms"] rect';
const subscription = 'div[style] svg > rect';
const submit = '[type="submit"]';
const error = '[id*="error"]';
const errorAfterClickCreate = '[id*="form_error"]>span';
const email='#email';
const name='#full_name';
const password='#password';

class SignUpPage {

    open(){
        cy.visit('/sign-up');
    }

    get email(){
        return cy.get(email);
    }

    get getTextError() {
        return cy.get(error);
    }
    get getTextDownError() {
        return cy.get(errorAfterClickCreate, {timeout:60000});
    }

    clickTermsAndConditions() {
        cy.get(termsAndCondition).click();
    }

    clickSubscription() {
        cy.get(subscription).click();
    }

    clickSubmit() {
        cy.get(submit).scrollIntoView().click();
    }

    enterEmail(email_txt){
        this.email.type(email_txt);
    }

    enterName(name_txt){
        cy.get(name).type(name_txt);
    }

    enterPassword(password_txt){
        cy.get(password).type(password_txt);
    }

    register() {
        this.enterEmail(accountData.email);
        this.enterName(accountData.name);
        this.enterPassword(accountData.password);
        this.clickTermsAndConditions();
        this.clickSubscription();
        this.clickSubmit();
    }
}
export default new SignUpPage();

