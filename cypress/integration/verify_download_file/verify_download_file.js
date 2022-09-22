///<reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjectRepo/HomePage"
import CartPage from "../PageObjectRepo/CartPage"


const homepage = new HomePage()
const cartpage =new CartPage()
Given("Add products to cart",()=>{
    homepage.AddToCartBtn().eq(2).click().wait(5000)
})
Given("Click 'Cart' button",()=>{
    homepage.ViewCartBtn().click({force: true})
})
Given("Verify that cart page is displayed",()=>{
    cartpage.cartProductImage().should("be.visible")
})
Given("Click Proceed To Checkout",()=>{
    cartpage.proceedToCheckout().click()
})
Given("Click 'Register / Login' button",()=>{
    cartpage.checkoutRegisterLogin().click()
})
Given("Fill all details in Signup and create account",()=>{
    cy.SignUp()
})
Given("Verify 'ACCOUNT CREATED!' and click 'Continue' button",()=>{
    cy.get('b').should("be.visible")  
    cy.get('.pull-right .btn').click({force:true})
})
Given("Verify ' Logged in as username' at top",()=>{
    homepage.logged_in_as().should("contain.text","MAT")
})
Given("Click 'Cart' button",()=>{
    homepage.cartBtn().click()
})
Given("Click 'Proceed To Checkout' button",()=>{
    cartpage.proceedToCheckout().click()
})
Given("Verify Address Details and Review Your Order",()=>{
    cartpage.adress_forDelivery().should("be.visible")
    cartpage.product_Quantity().should("be.visible")
})
Given("Enter description in comment text area and click 'Place Order'",()=>{
    cartpage.form().type("Thanks")
    cartpage.placeOrderBtn().click()
})
Given("Enter payment details and Click 'Pay and Confirm Order' button",()=>{
    cy.Payment()
})
Given("Verify success message 'Your order has been placed successfully!'",()=>{
    cartpage.PlaceOrderedMessage().should("have.text","Congratulations! Your order has been confirmed!")
})
Given("Click 'Download Invoice' button and verify invoice is downloaded successfully.",()=>{
    homepage.DownloadInvoiceButton().click()
    
    //cy.log(cy.fixture("./downloads/invoice.txt"))
    
})
       
    
      
