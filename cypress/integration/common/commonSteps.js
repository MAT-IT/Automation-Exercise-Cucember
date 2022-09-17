/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import { commonVariable  } from '../helper';

Given("Navigate to url", function () {
    cy.visit(commonVariable .url)
})
Given("Verify that home page is visible successfully", () => {
    cy.title().should("contain", "Automation Exercise")    
})