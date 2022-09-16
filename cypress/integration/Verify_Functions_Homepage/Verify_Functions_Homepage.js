/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjectRepo/HomePage"
import contactUsPage from "../PageObjectRepo/ContactUsPage";
import TestCasePage from "../PageObjectRepo/TestCasePage"

const homepage = new HomePage();
const contactUs = new contactUsPage();
const testcasepage =new TestCasePage()


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
Given("Click on 'Test Cases' button",()=>{
    homepage.TestCaseBtn().click()
})
Given("Verify user is navigated to test cases page successfully",()=>{
    testcasepage.header().should("have.text","Test Cases")
    //"test case lenght verify
    testcasepage.testcasesCount().then(function(item){
        const itemCount = Cypress.$(item).length;
        testcasepage.testcasesCount().should("have.length",itemCount)
        
    })
})

Given("Verify text 'SUBSCRIPTION'",()=>{
    homepage.subscriptionTitle().should("have.text","Subscription")
})
Given("Enter email address in input and click arrow button",()=>{
    homepage.subscripEmailBox().type("hello@gmail.com")
    homepage.subscripButton().click().wait(5000)
})
Given("Verify success message 'You have been successfully subscribed!' is visible",()=>{
    cy.get('.footer-widget > .container').contains("You have been successfully subscribed!")
})
Given("Click 'Cart' button",()=>{
    homepage.cartBtn().click()
})

