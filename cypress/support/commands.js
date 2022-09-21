// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-downloadfile/lib/downloadFileCommand');
import 'cypress-file-upload'
import AccountInfo from '../integration/PageObjectRepo/AccountInfoPage'
import HomePage from '../integration/PageObjectRepo/HomePage'
import signUpLoginPage from "../integration/PageObjectRepo/SignUp_Login_page"
import { faker } from '@faker-js/faker';
import Payment from '../integration/PageObjectRepo/PaymentInfoPage';

const homepage = new HomePage()
const login = new signUpLoginPage()
const signuploginpage = new signUpLoginPage();
const accountinfo = new AccountInfo()
const payment = new Payment()


  Cypress.on('uncaught:exception', (err, runnable) => { //with this we can handle uncaught:exception in cypress
    return false;                                      //commands.js file'a alinabilir
  });
   
Cypress.Commands.add("LogIn", function () {
  homepage.SignUploginButton().click()
  login.LoginEmailBox().type("amazontestcypress@gmail.com")
  login.LoginPasswordBox().type("2301")
  login.LoginButton().click()
 
})
Cypress.Commands.add("Payment", function () {
  payment.CardName().type(faker.name.firstName())
  payment.CardNumber().type(faker.finance.creditCardNumber())
  payment.CardVerifCode().type(faker.finance.creditCardCVV())
  payment.CardExpretionMounth().type(faker.date.month())
  payment.CardExpretionYear().type(2026)
  payment.PayAndConfirmBtn().click()
})

Cypress.Commands.add("SignUp",function(){
   const email = faker.internet.email()

        signuploginpage.SignUpNameBox().type("MAT")
        signuploginpage.SignUpEmailBox().type(email)   
        signuploginpage.SignUpButton().click()    
        accountinfo.enteraccountinfo().should("be.visible")   
        accountinfo.titlecheck().contains("Mr").click()
        accountinfo.passwordbox().type("1234")
        accountinfo.dobdays().select("6")
        accountinfo.dobmonths().select("May")
        accountinfo.dobyears().select(5)
        accountinfo.newletterscheckbox().check()
        accountinfo.offercheckbox().check()    
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
        accountinfo.createaccountbutton().click()      
        //  cy.get('b').should("be.visible")  
        //  cy.get('.pull-right .btn').click({force:true})
    
})
Cypress.Commands.add("AdressInfo",function(){
        accountinfo.adresscompany().type("yuyu")
        accountinfo.adressline1().type("dfgg")
        accountinfo.adressline2().type("hgh")
        accountinfo.adresscity().type("fifi")        
        accountinfo.adressstate().type("east")
        accountinfo.adresszipcode().type("4578")
        accountinfo.adresscountryselectbox().select(3)  
   
})

