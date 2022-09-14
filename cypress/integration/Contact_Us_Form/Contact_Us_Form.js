/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjectRepo/HomePage"
import contactUsPage from "../PageObjectRepo/ContactUsPage";

const homepage = new HomePage();
const contactUs = new contactUsPage;

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

Given("Verify that home page is visible successfully", () => {
    cy.title().should("contain", "Automation Exercise")
    
})    
Given("Click on 'Contact Us' button",()=>{
    homepage.ContactUsBotton().click()
})

Given("Verify 'GET IN TOUCH' is visible",()=>{
    contactUs.GetInTouch().should("be.visible")
})
Given("Enter name, email, subject and message",()=>{
    contactUs.name().type("mat");
    contactUs.email().type("mat@gmail.com")
    contactUs.subject().type("tell off")
    contactUs.message().type("your bird is distrub us when we studie lesson")
})
Given("Upload file And Click 'Submit' button",()=>{
    contactUs.selectFile().attachFile("nature.jpeg")
    contactUs.submitBtn().click().wait(5000)
})
Given("Verify success message 'Success! Your details have been submitted successfully.' is visible",()=>{
    contactUs.status().should("have.text","Success! Your details have been submitted successfully.")
})
Given("Click 'Home' button and verify that landed to home page successfully",()=>{
    contactUs.backhomepage().click()
   
})


