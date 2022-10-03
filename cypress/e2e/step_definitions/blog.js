const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import blogPage from "../pages/blog.page";
import mainPage from "../pages/main.page";

Given('A user opens telnyx website on the blog page',()=>{
    blogPage.open(); 
});
 
Then('Page contain the header {string}', (header)=>{
    mainPage.clickAcceptAndClose();
    blogPage.getHeader.should(($p) => {
        expect($p.text()).eq(header);
    });
});

When('Click {string} button',(name)=>{
    blogPage.clickOnLearnElement(name);
});

Then('See {string} guide page',(name)=>{
    //cy.title().should('eq', name);
    blogPage.getHeader.should('have.text', name);
})

