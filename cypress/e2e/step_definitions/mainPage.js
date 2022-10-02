import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import mainPage from "../pages/main.page";
import registerPage from "../pages/register.page";
import resources from "./resources";


Given('A user opens telnyx website', () => {
  cy.visit('/');
});

When('I click open menu button', () => {
  mainPage.clickAcceptAndClose();
  mainPage.clickOpenMenu();
});

Then('See all button menu on the main page', () => {
  mainPage.listHeader.each((item, index) => {
    cy.wrap(item.text()).should('contain', resources.textListButton[index]);
  });
});

When('I click on Sign up', () => {
  mainPage.clickSignUp();
});

Then('See {string} page', (title) => {
  cy.title().should('contain', title);
});

When('I enter email', () => {
  mainPage.enterEmail('qsbhbhsx@shdb.bdb');
});

When('Click on "Try For Free"', () => {
  mainPage.clickTryForFree();
});

Then('See email on the {string} page', (title) => {
  cy.title().should('contain', title);
  registerPage.email.should('have.value', 'qsbhbhsx@shdb.bdb');
});

When('I click open menu', () => {
  mainPage.clickOpenMenu();
});

When('Click on {string} button', (name) => {
  mainPage.clickOnButtonMenu(name)
});

When('Click on {string} link', (name)=>{
  mainPage.clickOnLinks(name);
})

Then('See all href Products on the main page', () => {
  mainPage.listBtnInMenu.each((item, index, $listofElements) => {
    cy.wrap(item.text()).should('contain', resources.textListProducts[index]);
  });
});

Then('See all href Pricing on the main page', () => {
  mainPage.listBtnInMenu.each((item, index) => {
    cy.wrap(item.text()).should('contain', resources.textListPricing[index]);
  });
});

Then('See right email on the register page', ()=>{
  registerPage.email.should('have.value', 'qsbhbhsx@shdb.bdb');
});

