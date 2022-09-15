/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Then("get data from Fixtures", function () {
    cy.fixture("data").then(
        function (data) {
            this.data = data
        }
    )
})
Given("Navigate to url", function () {
    cy.visit(this.data.url)
   
})