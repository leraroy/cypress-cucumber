const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import registerPage from "../pages/register.page";
import mainPage from "../pages/main.page";

Given('A user opens telnyx website on the sign up page', ()=>{
    registerPage.open();
});

When('Click on "submit"', ()=>{
    mainPage.clickAcceptAndClose();
    registerPage.clickSubmit();
});

Then('The error message should be given to user as {string}',(message)=>{
  registerPage.getTextError.each((item)=> {
    cy.wrap(item).should(($el) => expect($el.text().trim()).to.equal(message));
  });
});

When('Enter correct data', ()=>{
    registerPage.register();
});

Then('See message', ()=>{
    registerPage.getTextDownError.should(($x)=>{
        expect($x).to.not.be.null;
    });
});
