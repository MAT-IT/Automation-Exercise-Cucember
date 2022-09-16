/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjectRepo/HomePage"
import productPage from "../PageObjectRepo/ProductPage"
import searchProductPage from "../PageObjectRepo/SearchProductPage"
import CartPage from "../PageObjectRepo/CartPage"

const homepage = new HomePage();
const productpage = new productPage();
const searchproduct= new searchProductPage()
const cartpage =new CartPage()


Given("Verify that home page is visible successfully",()=>{
    cy.title("includes","Automation")
})
Given("Click on 'Products' button",()=>{
    homepage.productbtn().click()
})
Given("Verify user is navigated to ALL PRODUCTS page successfully",()=>{
    productpage.header().should("have.text","All Products")
})
Given("The products list is visible",()=>{
    productpage.allproductCart().then(function(item){
        const itemCount=Cypress.$(item).length;
        cy.log(itemCount)   
        productpage.allproductCart().should("have.length",itemCount)         
    })
})
Given("Click on 'View Product' of first product",()=>{
    productpage.wievfirtproduct().click()
})
Given("Verify that detail is visible: product name, category, price, availability, condition, brand",()=>{
    productpage.wievproductname().should("be.visible")
    productpage.wievproductCategory().contains("Category")
    productpage.wievproductPrice().contains(500)
    productpage.wievproductAvailability().should("contain.text","In Stock")
    productpage.wievproductCondition().contains("New")
    productpage.wievproductBrand().contains("Polo")
})


Given("Enter product name in search input and click search button",()=>{
    productpage.searchInputBox().type("JEANS")
    productpage.searchButton().click()
})
Given("Verify all the products related to search are visible",()=>{
   searchproduct.productList().eq(0).should("contain.text","Jeans")
   searchproduct.productList()
            .then(function(item){
                const itemCount=Cypress.$(item).length;
                cy.log(itemCount)
                for (var i = 0; i < itemCount; i++) {
                    searchproduct.productList()
                        .eq(i).should('contain.text', "Jeans")
                
               }
            })

})
Given("Hover over first product and click 'Add to cart'",()=>{
    productpage.allproductsforHover().eq(0).realHover('mouse')
    productpage.addToCartAfterHover().eq(0).click({force: true})
})
Given("Click 'Continue Shopping' button",()=>{
    productpage.CountinueShoppingBtn().click()
})
Given("Hover over second product and click 'Add to cart'",()=>{
    productpage.allproductsforHover().eq(1).realHover('mouse')
    productpage.addToCartAfterHover().eq(1).click({force: true})
})
Given("Click 'View Cart' button",()=>{
    productpage.ViewCartBtn().click() 
})
Given("Verify both products are added to Cart",()=>{
    cartpage.cartProductImage().should("have.length","2")
})
Given("Verify their prices, quantity and total price",()=>{
    for(let i=0 ;i<2 ;i++){
        //verify separetly product Quantity  product price
        cartpage.product_Price().eq(i).then(function(price){
            cy.log(price.text())  
            const productprice = Number(price.text().replace("Rs. ",""))
            cy.log(productprice)
            cy.wrap(productprice).as("productprice") 
        })
        cartpage.product_Quantity().eq(i).then(function(Quantity){
            cy.log(Quantity.text())  
            const ProductQuantity = Number(Quantity.text())
            cy.log(ProductQuantity)
            let productquantityprice = ProductQuantity*this.productprice
            cy.wrap(productquantityprice).as("productquantityprice") 
            
        })
       
        cartpage.product_TotalPrice().eq(i).then(function(Totalprice){
            cy.log(Totalprice.text())  
            const ProductTotalPrice = Number(Totalprice.text().replace("Rs. ",""))
            cy.log(ProductTotalPrice)
            cy.wrap(ProductTotalPrice).as("ProductTotalPrice") 
            expect(ProductTotalPrice).to.equal(this.productquantityprice )
        })
        
    }
})

    
Given("Verify product detail is opened",()=>{
    productpage.viewProductQuantityLabel().should("be.visible")
  })
Given("Increase quantity to 4",()=>{       
    productpage.viewProductQuantity().clear().type("4")       
 })
 Given("Click 'Add to cart' button",()=>{
   productpage.addtocartbtn().click()
 })
 Given("Verify that product is displayed in cart page with exact quantity",()=>{
    cartpage.cartProductImage().should("be.visible")
 })
 
