
const selectReason='select[id*="Reason"]';
const selectPhone='select[id*="Phone"]';
const submitBtn='[type="submit"]';
const subscription='[name*="Subscription"]';
const successMessage='//h1';
const errorMessage='form [role="alert"]';

class ContactUsPage{
    open(){
        cy.visit('contact-us');
    }

    dataInput(input, data){
        input=input.replace(/\s+/g, '');
        cy.xpath('//form//input[contains(@name,"'+input+'")]').type(data);
    }

    selectReasonForContact(reason){
        cy.get(selectReason).select(reason);
    }

    selectPhoneNumber(phone){
        cy.get(selectPhone).select(phone);
    }

    clickOnSubmit(){
        cy.get(submitBtn).scrollIntoView().click();
        cy.wait(3000);
    }

    clickOnSubscription(){
        cy.get(subscription).click();
    }

    get successMessage(){
       return cy.xpath(successMessage);
    }
    
    get errorMessage(){
        return cy.get(errorMessage);
    }
}
export default new ContactUsPage();