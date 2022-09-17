Feature: Contact Us Form
 
    Background: set up environment
        And Navigate to url
        And Verify that home page is visible successfully       
   
    Scenario: TC06 Contact Us Form   
        
        And Click on 'Contact Us' button
        And Verify 'GET IN TOUCH' is visible
        And Enter name, email, subject and message
        And Upload file And Click 'Submit' button 
        And Verify success message 'Success! Your details have been submitted successfully.' is visible
        And Click 'Home' button and verify that landed to home page successfully        
    
    Scenario: TC07 Verify Test Cases Page 
        
        And Click on 'Test Cases' button
        And Verify user is navigated to test cases page successfully
    
    Scenario: TC10 Verify Subscription in home page 
        
        And Verify text 'SUBSCRIPTION'
        And Enter email address in input and click arrow button
        And Verify success message 'You have been successfully subscribed!' is visible
    
    Scenario: TC11 Verify Subscription in Cart page 
        
        And Click 'Cart' button
        And Verify text 'SUBSCRIPTION'
        And Enter email address in input and click arrow button
        And Verify success message 'You have been successfully subscribed!' is visible
    
        




