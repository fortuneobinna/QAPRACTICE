describe('My Login Test Suite',function()
{
    //Positive Test1
    it('Login Test with valid data',function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.url().should('include','demo')
        cy.title().should('be.eq','Your store. Login')

        //The input boxes already contain email and password. Delete them to make the input boxes empty:
        cy.get('#Email').clear('admin@yourstore.com')       
        cy.get('[name="Password"]').clear('admin')

        //input new data
        cy.get('#Email').type('admin@yourstore.com')
        cy.get('[name="Password"]').type('admin')
        cy.get('.login-button').click()
        cy.title().should('be.eq','Dashboard / nopCommerce administration')
    })

    //Negative Test1
    it('invalid email and valid password',function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.url().should('include','demo')
        cy.title().should('be.eq','Your store. Login')

        cy.get('#Email').clear('admin@yourstore.com')       
        cy.get('[name="Password"]').clear('admin')

        //invalid email and valid password
        cy.get('#Email').type('admin@yourstore123.com')
        cy.get('[name="Password"]').type('admin')
        cy.get('.login-button').click()
        cy.title().should('be.eq','Your store. Login')
    })

    //Negative Test2
    it('valid email and invalid password',function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.url().should('include','demo')
        cy.title().should('be.eq','Your store. Login')

        
        cy.get('#Email').clear('admin@yourstore.com')       
        cy.get('[name="Password"]').clear('admin')

        //valid email and invalid password
        cy.get('#Email').type('admin@yourstore.com')
        cy.get('[name="Password"]').type('admin123')
        cy.get('.login-button').click()
        cy.title().should('be.eq','Your store. Login')
    })

    //Negative Test3
    it('invalid email and invalid password',function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.url().should('include','demo')
        cy.title().should('be.eq','Your store. Login')

        
        cy.get('#Email').clear('admin@yourstore.com')       
        cy.get('[name="Password"]').clear('admin')

        //invalid email and invalid password
        cy.get('#Email').type('admin@yourstore123.com')
        cy.get('[name="Password"]').type('admin123')
        cy.get('.login-button').click()
        cy.title().should('be.eq','Your store. Login')
    })

    //Negative Test4
    it('empty fields',function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.url().should('include','demo')
        cy.title().should('be.eq','Your store. Login')

        
        cy.get('#Email').clear('admin@yourstore.com')       
        cy.get('[name="Password"]').clear('admin')

        //empty email and empty password
        cy.get('.login-button').click()
        cy.title().should('be.eq','Your store. Login')
    })

    //Positive Test2
    it('valid email and valid password',function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.url().should('include','demo')
        cy.title().should('be.eq','Your store. Login')

        
        cy.get('#Email').clear('admin@yourstore.com')       
        cy.get('[name="Password"]').clear('admin')

        //valid email and valid password
        cy.get('#Email').type('admin@yourstore.com')
        cy.get('[name="Password"]').type('admin')
        cy.get('.login-button').click()
        cy.title().should('be.eq','Dashboard / nopCommerce administration')
    })

})