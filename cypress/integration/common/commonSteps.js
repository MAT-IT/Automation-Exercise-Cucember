/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import { stateStore } from '../helper';

Given("Navigate to url", function () {
    cy.visit(stateStore.url)
})
Given("Verify that home page is visible successfully", () => {
    cy.title().should("contain", "Automation Exercise")    
})