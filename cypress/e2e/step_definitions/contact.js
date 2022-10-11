const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import contactUsPage from "../pages/contactUs.page";
import mainPage from "../pages/main.page";

Given('A user opens telnyx website on the contact us page',()=>{
    contactUsPage.open();
});

When('Click submit button',()=>{
    mainPage.clickAcceptAndClose();
    contactUsPage.clickOnSubmit();
});

When('Choose {string} for contact',(reason)=>{
    contactUsPage.selectReasonForContact(reason);
});

When('Choose {string} for phone number',(country)=>{
    contactUsPage.selectPhoneNumber(country);
});

When('Enter {string} is {string}',(input,data)=>{
    contactUsPage.dataInput(input, data);
});

When('Choose receive emails',()=>{
    contactUsPage.clickOnSubscription();
});

When('Click Submit button',()=>{
    contactUsPage.clickOnSubmit();
});

Then('The user should see an error message {string}', (message)=>{
    contactUsPage.errorMessage.should('contain.text', message);
    // .each((item)=> {
    //     cy.wrap(item).should(($el) => expect($el.text().trim()).to.equal(message));
    //   });
})

Then('The message should be given to user as {string}', (message)=>{
    contactUsPage.successMessage.each((item)=> {
        cy.wrap(item).should(($el) => expect($el.text().trim()).to.equal(message));
      });
})

