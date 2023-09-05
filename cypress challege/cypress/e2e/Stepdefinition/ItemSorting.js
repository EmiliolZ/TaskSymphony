import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const homeSaucePage = require('../../pages/homeSaucePage');
const inventoryPage = require('../../pages/inventoryPage'); // You may need to import your inventory page module

Given('the user is logged in', () => {
    // Assuming the login is successful in your existing setup
    // If not, you should add relevant login steps here
    cy.visit('https://www.saucedemo.com');
    homeSaucePage.typeUsername('standard_user');
    homeSaucePage.typePassword('secret_sauce');
    homeSaucePage.clickLoginButton();
});

When('the user selects sorting by Name (A -> Z)', () => {
    inventoryPage.selectSortByNameAZ(); // Implement this function in your inventory page module
});

When('the user selects sorting by Name (Z -> A)', () => {
    inventoryPage.selectSortByNameZA(); // Implement this function in your inventory page module
});

Then('the items should be sorted by Name (A -> Z)', () => {
    // Implement assertions to check if the items are sorted by Name (A -> Z)
    // You may need to interact with your inventory page elements and validate the sorting
    // Example assertion: cy.get('.product_name').should('have.text', 'Item A, Item B, Item C...');
});

Then('the items should be sorted by Name (Z -> A)', () => {
    // Implement assertions to check if the items are sorted by Name (Z -> A)
    // You may need to interact with your inventory page elements and validate the sorting
    // Example assertion: cy.get('.product_name').should('have.text', 'Item Z, Item Y, Item X...');
});

Then('the items should be sorted correctly', () => {
    // Implement assertions to check if the items are sorted correctly after changing the sorting
    // You may need to interact with your inventory page elements and validate the sorting
});