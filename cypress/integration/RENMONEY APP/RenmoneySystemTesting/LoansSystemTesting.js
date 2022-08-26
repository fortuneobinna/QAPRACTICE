describe('Renmoney Loans Process- System Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title. 
    })
    
    it('Loan Process',function()
    {
        cy.get('.nav__menu > :nth-child(1)').should('be.visible').contains('Loans').click()  //click on loans
        cy.title().should('eq','Convenient Personal & Micro-business Loans')    //verify page title
        cy.url().should('include','loans')   //verify url

        cy.get('.loan-cta-button').should('be.visible').contains('App').click()   //Apply Now button. not stable.it takes you to two different pages at different tests; 1st and 2nd pages as below
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','login')   //verify url

        //1st Page: Login Page
        cy.get('.nav__actions > .nav__actions__btn--alt').should('be.visible').contains('Get Started').click()   //Get started, beside the login button
        cy.url().should('include','login-email')
        cy.title().should('eq','Renmoney')

        cy.get('#email').should('be.visible').should('be.enabled').clear('fortuneobinna6@gmail.com').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').contains('Get Started').click({force:true})
        cy.url().should('include','login-password')
        cy.title().should('eq','Renmoney')

        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@123')
        cy.get('#change-password-type-trigger').should('be.visible').click().click()    //to view password

        cy.get('.form').should('be.visible').contains('Next').click()
        cy.url().should('include','signup-BVN')
        cy.title().should('eq','Renmoney')

        //stopped here at request for BVN, because of no intention to get a loan.



        /*cy.get('.non-mobile > .calculator > :nth-child(3) > .form-select').select('Self-Employed').should('have.value','Self-Employed')    //drop down menu. stopped working here. The element is being covered by another element.
        //There have been situations where Cypress doesS not correctly allow you to interact with an element that should be interactable.

        cy.get('.non-mobile > .calculator > :nth-child(4) > .form-control').should('be.visible').should('be.enabled').type('5000000')
        cy.get('.non-mobile > .calculator > button').should('be.visible').click()
        cy.title().should('eq','Renmoney')
        
        //2nd Page: Renmoney Page 
        /*cy.get('#state').should('be.visible').select('Lagos').should('have.value','Lagos')
        cy.get('#lga').should('be.visible').select('Alimosho').should('have.value','Alimosho')
        cy.get('#lga').should('be.visible').select('7').should('have.value','7')
        cy.get('.container > :nth-child(2) > .form-control').should('be.visible').select('Aug').should('have.value','Aug')
        cy.get('.container > .px-0 > .form-control').should('be.visible').select('1960').should('have.value','1960')
        cy.get('.form > .btn').should('be.visible').contains('Continue').click()*/
    })
})

