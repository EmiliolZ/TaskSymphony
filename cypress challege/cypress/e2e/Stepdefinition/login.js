import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const homeSoucePage = require('../../pages/homeSaucePage')

Given('the user is on the login page', () => {
    cy.visit('https://www.saucedemo.com');
});

When('the user enters {string} as the username', (username) => {
    homeSoucePage.typeUsername(username);
});

And('the user enters {string} as the password', (password) => {
    homeSoucePage.typePassword(password);
});

And('the user clicks the login button', () => {
    homeSoucePage.clickLogin()
});

Then('the login should be successful', () => {
    // Add your assertions here to check if the login was successful.
    // For example, you can check if you are on the inventory page after a successful login.
    cy.url().should('include', 'inventory.html');
});
