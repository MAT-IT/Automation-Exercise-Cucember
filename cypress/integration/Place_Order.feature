Feature: Register And Login
 
    Background: set up environment
        Then get data from Fixtures
        
   
    Scenario: TC014 Place Order: Register while Checkout    
        And Navigate to url
        And Verify that home page is visible successfully
        And Add products to cart
        And Click 'Cart' button
        And Verify that cart page is displayed
        And Click Proceed To Checkout
        And Click 'Register / Login' button
        And Fill all details in Signup and create account
        And Verify 'ACCOUNT CREATED!' and click 'Continue' button
        And Verify ' Logged in as username' at top
        And Click 'Cart' button
        And Click 'Proceed To Checkout' button
        And Verify Address Details and Review Your Order
        And Enter description in comment text area and click 'Place Order'
        And Enter payment details and Click 'Pay and Confirm Order' button
        And Verify success message 'Your order has been placed successfully!'
    
     Scenario: TC015 Place Order: Register before Checkout
        And Navigate to url
        And Verify that home page is visible successfully
        And Click 'Signup / Login' button
        And Fill all details in Signup and create account
        And Verify 'ACCOUNT CREATED!' and click 'Continue' button
        And Verify ' Logged in as username' at top
        And Add products to cart
        And Click 'Cart' button
        And Verify that cart page is displayed
        And Click Proceed To Checkout
        And Verify Address Details and Review Your Order
        And Enter description in comment text area and click 'Place Order'
        And Enter payment details and Click 'Pay and Confirm Order' button
        And Verify success message 'Your order has been placed successfully!'  
    
    Scenario: TC016 Place Order: Login before Checkout
        And Navigate to url
        And Verify that home page is visible successfully
        And Click 'Signup / Login' button
        And Fill email, password and click 'Login' button
        And Verify ' Logged in as username' at top
        And Add products to cart
        And Click 'Cart' button
        And Verify that cart page is displayed
        And Click Proceed To Checkout
        And Verify Address Details and Review Your Order
        And Enter description in comment text area and click 'Place Order'
        And Enter payment details and Click 'Pay and Confirm Order' button
        And Verify success message 'Your order has been placed successfully!' 
   @focus
    Scenario: TC017 Remove Products From Cart 
        And Navigate to url
        And Verify that home page is visible successfully
        And Add products to cart
        And Click 'Cart' button
        And Verify that cart page is displayed
        And Click 'X' button corresponding to particular product
        And Verify that product is removed from the cart

       
        


