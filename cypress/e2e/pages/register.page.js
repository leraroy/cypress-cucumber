import accountData from "../helper/account.data";

const termsAndCondition = '[aria-labelledby*="terms"] rect';
const subscription = 'div[style] svg > rect';
const submit = '[type="submit"]';
const error = '[id*="error"]';
const errorAfterClickCreate = '[id*="form_error"]>span';

class SignUpPage {

    open(){
        cy.visit('/sign-up');
    }

    get email() {
        return cy.get('#email');
    }

    get name() {
        return cy.get('#full_name')
    }

    get password() {
        return cy.get('#password');
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

    enterEmail(email) {
        this.email.type(email);
    }

    enterName(name) {
        this.name.type(name);
    }

    enterPassword(password) {
        this.password.type(password);
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

