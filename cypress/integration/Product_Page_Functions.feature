Feature: Contact Us Form
 
    Background: set up environment
        And Navigate to url
        And Verify that home page is visible successfully      
   
    Scenario: TC08 Verify All Products and product detail page 
        
        And Click on 'Products' button
        And Verify user is navigated to ALL PRODUCTS page successfully
        And The products list is visible
        And Click on 'View Product' of first product
        And Verify that detail is visible: product name, category, price, availability, condition, brand
    
    Scenario: TC09 Search Product
        
        And Click on 'Products' button
        And Verify user is navigated to ALL PRODUCTS page successfully
        And Enter product name in search input and click search button
        And Verify all the products related to search are visible
    
    Scenario: TC12 Add Products in Cart
        
        And Click on 'Products' button
        And Hover over first product and click 'Add to cart'
        And Click 'Continue Shopping' button
        And Hover over second product and click 'Add to cart'
        And Click 'View Cart' button
        And Verify both products are added to Cart
        And Verify their prices, quantity and total price 
    
    Scenario: TC13 Verify Product quantity in Cart
        
        And Click on 'View Product' of first product
        And Verify product detail is opened
        And Increase quantity to 4
        And Click 'Add to cart' button
        And Click 'View Cart' button
        And Verify that product is displayed in cart page with exact quantity
    
    Scenario: TC18 View Category Products  
        And Verify that categories are visible on left side bar
        And Click on 'Women' category
        And Click on any category link under 'Women' category, for example: Dress
        And Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
        And On left side bar, click on any sub-category link of 'Men' category
        And Verify that user is navigated to that category page 

    
    Scenario: TC19 View & Cart Brand Products
        And Click on 'Products' button
        And Verify that Brands are visible on left side bar
        And Click on whole brand name and verify that user is navigated to brand page and brand products are displayed
        
    @focus
    Scenario: TC20 Search Products and Verify Cart After Login
        And Click on 'Products' button
        And Verify user is navigated to ALL PRODUCTS page successfully
        And Enter product name in search input and click search button
        And Verify 'SEARCHD PRODUCTS' is visible
        And Verify all the products related to search are visible
        And Add those products to cart
        And click wiev cart button
        And click login and submit
        And Again, go to Cart page
        And Verify that those products are visible in cart after login as well

    
    Scenario: TC21 Add review on product
       And Click on 'Products' button
       And Verify user is navigated to ALL PRODUCTS page successfully
       And Click on 'View Product' button
       And Verify 'Write Your Review' is visible
       And Enter name, email and review
       And Click 'Submit' button
       And Verify success message 'Thank you for your review.'