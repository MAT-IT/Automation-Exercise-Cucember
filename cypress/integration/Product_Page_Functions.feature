Feature: Contact Us Form
 
    Background: set up environment
        Then get data from Fixtures        
   
    Scenario: TC08 Verify All Products and product detail page 
        And Navigate to url
        And Verify that home page is visible successfully
        And Click on 'Products' button
        And Verify user is navigated to ALL PRODUCTS page successfully
        And The products list is visible
        And Click on 'View Product' of first product
        And Verify that detail is visible: product name, category, price, availability, condition, brand
    
    Scenario: TC09 Search Product
        And Navigate to url
        And Verify that home page is visible successfully
        And Click on 'Products' button
        And Verify user is navigated to ALL PRODUCTS page successfully
        And Enter product name in search input and click search button
        And Verify all the products related to search are visible
    
    Scenario: TC12 Add Products in Cart
        And Navigate to url
        And Verify that home page is visible successfully
        And Click on 'Products' button
        And Hover over first product and click 'Add to cart'
        And Click 'Continue Shopping' button
        And Hover over second product and click 'Add to cart'
        And Click 'View Cart' button
        And Verify both products are added to Cart
        And Verify their prices, quantity and total price 
    @focus
    Scenario: TC13 Verify Product quantity in Cart
        And Navigate to url
        And Verify that home page is visible successfully
        And Click on 'View Product' of first product
        And Verify product detail is opened
        And Increase quantity to 4
        And Click 'Add to cart' button
        And Click 'View Cart' button
        And Verify that product is displayed in cart page with exact quantity

