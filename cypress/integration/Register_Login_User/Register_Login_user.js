/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import AccountInfo from "../PageObjectRepo/AccountInfoPage";
import HomePage from "../PageObjectRepo/HomePage"
import signUpLoginPage from "../PageObjectRepo/SignUp_Login_page";
import { faker } from '@faker-js/faker';

const homepage = new HomePage();
const signuploginpage = new signUpLoginPage();
const accountinfo = new AccountInfo();



Given("Click on 'Signup / Login' button",function() {
    homepage.SignUploginButton().click()
})
Given("Verify {string} is visible", (text) => {
    signuploginpage.LoginHeader().should("contain", text)
})
Given("Enter name and email address", function() {
    signuploginpage.SignUpNameBox().type(faker.name.firstName())
    signuploginpage.SignUpEmailBox().type(faker.internet.email()) 
})
Given("Enter name and already registered email address", function() {
    signuploginpage.SignUpNameBox().type("cebeyden")
    signuploginpage.SignUpEmailBox().type("cebeyden@gmail.com") 
})
Given("Click 'Signup' button", function() {
    signuploginpage.SignUpButton().click()
})
Given("Verify that 'ENTER ACCOUNT INFORMATION' is visible", () => {
    accountinfo.enteraccountinfo().should("be.visible")
})
Given("Fill details: Title, Name, Email, Password, Date of birth", () => {
    accountinfo.titlecheck().contains("Mr").click()
    accountinfo.passwordbox().type("1234")
    accountinfo.dobdays().select("6")
    accountinfo.dobmonths().select("May")
    accountinfo.dobyears().select(5)
})
Given("Select checkbox 'Sign up for our newsletter!'", function() {
    accountinfo.newletterscheckbox().check()    
})
Given("Select checkbox 'Receive special offers from our partners!'", function() {
    accountinfo.offercheckbox().check()
})
Given("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", function() {
    accountinfo.adressfirstname().type("ali")
    accountinfo.adresslastname().type("haydar")
    accountinfo.adressline1().type("dfgg")
    accountinfo.adressline2().type("hgh")
    accountinfo.adresscity().type("fifi")
    accountinfo.adresscompany().type("yuyu")
    accountinfo.adressstate().type("east")
    accountinfo.adresszipcode().type("4578")
    accountinfo.adresscountryselectbox().select(3)
    accountinfo.adressmobilenumber().type("4141114")
})
Given("Click 'Create Account button'", function() {
    accountinfo.createaccountbutton().click()
})
Given("Verify that 'ACCOUNT CREATED!' is visible", function() {
   accountinfo.accountcreatedText().should("be.visible")
})
Given("Click 'Continue' button", function() {
    accountinfo.comtinueButton().click({force:true})
})
Given("Verify that 'Logged in as username' is visible", function() {
    homepage.logged_in_as().should("be.visible")
})


Given("Verify 'Login to your account' is visible", function() {
    signuploginpage.LoginHeader().should("have.text","Login to your account")
})
Given("Enter correct email address and password", function() {
    signuploginpage.LoginEmailBox().type("amazontestcypress@gmail.com")
    signuploginpage.LoginPasswordBox().type("2301")
})
Given("Enter {string} address and {string}", function(email,password) {
    signuploginpage.LoginEmailBox().type(email,{force:true})
    signuploginpage.LoginPasswordBox().type(password,{force:true})
})
Given("Verify error {string} is visible", function(text) {
    signuploginpage.incorrectEmailPassword().should("have.text",text)
})
Given("Click 'login' button", function() {
    signuploginpage.LoginButton().click()
})
Given("Click 'Logout' button", function() {
    homepage.Logout().click()
})
Given("Verify error {string} is visible", function(text) {
    signuploginpage.emailAlreadyExistText().should("have.text",text)
})



