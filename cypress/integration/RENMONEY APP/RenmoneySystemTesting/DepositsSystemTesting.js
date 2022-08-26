describe('Renmoney Deposits Process- System Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title.
    })
    
    it('Deposits Process',function()
    {
        cy.get('.nav__menu > :nth-child(3)').should('be.visible').click()   //click on Deposits option
        cy.title().should('eq','Renmoney Fixed Deposits | Start online today')
        cy.url().should('include','deposits')

        cy.get('#amount').should('be.visible').clear('20000').type('40000')     //How much do you want to deposit?
        cy.get(':nth-child(2) > .p-2 > .mb-0').should('be.visible').click()      //for how long
        cy.get('.btn').click()   //clicked on 'create fixed deposit' and the expected new page(email page) opened in another tab instead of the test result tab. copy the url from this new tab and paste as below.

        cy.visit('https://web.renmoney.com/login/login-email')   //makes the email page also visible on the test result tab. just finding my way around it, solves the issue
        cy.url().should('include','email')
        cy.title().should('eq','Renmoney')

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')

        cy.get('.btn').should('be.visible').click()
        cy.title().should('eq','Renmoney')
        cy.url().should('include','password')

        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@123')
        cy.get('#change-password-type-trigger').should('be.visible').click()
        cy.get('#change-password-type-trigger').should('be.visible').click()
        cy.get('.form').should('be.visible').click() 
        cy.title().should('eq','Renmoney')
        cy.url().should('include','sq')

        cy.get('#securityQuestion').should('be.visible').should('have.value','What is your favorite food?')
        cy.get('#securityAnswer').should('be.visible').should('be.enabled').type('Egusi Soup')
        cy.get('.btn').should('be.visible').click()
        cy.title().should('eq','Renmoney')
        cy.url().should('include','auth')

        //i didnt proceed after here because of no intention to deposit money.

        /*cy.get('#otp').should('be.visible').should('be.enabled').type('454279')  //check your phone for the OTP and type it here
        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@i23')
        cy.get('.btn').should('be.visible').click()*/
    }) 
})












//Initial Process. First Deposit. it worked.
/*describe('Renmoney APP Suite',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Home -')  //verify page title.
    })
    it('Deposits Process',function()
    {
        cy.get('.elementor-menu-toggle__icon--open').click()   //Click the 3-line drop down menu
        cy.get('.menu-item-6429 > .elementor-item').should('be.visible').click()   //click on login option
        cy.title().should('eq','Renmoney Fixed Deposits | Start online today -')

        cy.get('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-shortcode > deposit-calculator > app-deposit-calculator > #__ren_deposit_widget > :nth-child(1) > :nth-child(1) > .card-body > .pb-4 > #amount').should('be.visible').clear('20000').type('40000')     //amount to deposit
        cy.select('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-shortcode > deposit-calculator > app-deposit-calculator > #__ren_deposit_widget > :nth-child(1) > :nth-child(1) > .card-body > .pb-4 > .flex-wrap > :nth-child(3) > .p-2')  //for how long. stopped working here. The element is being covered by another element.
        //There have been situations where Cypress does not correctly allow you to interact with an element that should be interactable. .click({force: true}) didn't help.
        
        cy.get('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-shortcode > deposit-calculator > app-deposit-calculator > #__ren_deposit_widget > :nth-child(1) > :nth-child(1) > .card-body > .pb-4 > .btn').should('be.visible').click()
    }) 
})*/