describe('Renmoney Savings Process- System Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title. 
    })
    
    it('Savings Process: Easy Saving Package',function()
    {
        cy.get('.nav__menu > :nth-child(2)').should('be.visible').contains('Savings').click()     //click on login option
        cy.title().should('eq','Online savings | Earn up to 12% | Save from ₦500')   //verify page title
        cy.url().should('include','savings')    //Verify url

        cy.get(':nth-child(2) > .button-5').should('be.visible').contains('Get Started').click()     //Easy Savings
        cy.title().should('eq','Renmoney')      //Verify page title
        cy.url().should('include','register')    //Verify url

        cy.get('.font-15 > .text-alt').should('be.visible').contains('Log in').click()      //login
        cy.title().should('eq','Renmoney')     //Verify page title
        cy.url().should('include','login')    //Verify url

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').contains('Get started').click()
        cy.title().should('eq','Renmoney')     //Verify page title
        cy.url().should('include','login')    //Verify url

        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@123')
        cy.get('#change-password-type-trigger').should('be.visible').click()  //makes password visible
        cy.get('#change-password-type-trigger').should('be.visible').click()  //hides password again
        cy.get('.btn').should('be.visible').click()
        cy.title().should('eq','Renmoney')

        cy.get('#securityQuestion').should('be.visible').should('have.value','What is your favorite food?')
        cy.get('#securityAnswer').should('be.visible').should('be.enabled').type('Egusi Soup')
        cy.get('.btn').should('be.visible').click()

        //i didnt proceed after here because of no intention to save money.

        /*cy.get('#otp').should('be.visible').should('be.enabled').type('454279')  //check your phone for the OTP and type it here
        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@i23')
        cy.get('.btn').should('be.visible').click()*/
    })
})



















//initial scripts. worked. codes changed by the developer as above
/*describe('Renmoney Savings Process- System Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title. Became this after sign up and initial log in
    })
    
    it('Savings Process: Smart Goal Package',function()
    {
        cy.get('.elementor-menu-toggle__icon--open').click()   //Click the 3-line drop down menu
        cy.get('.menu-item-6431 > .elementor-item').should('be.visible').click()   //click on login option
        cy.title().should('eq','Online Savings | Earn up to 12% | Save from #500')   //verify page title
       
        cy.get('.elementor-element-2e7e228 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text').should('be.visible').click()  //Smart Goal
        cy.title().should('eq','Renmoney')
        
        cy.get('.btn').click()
        cy.title().should('eq','Renmoney')

        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@i23')
        cy.get('#change-password-type-trigger').should('be.visible').click()
        cy.get('#change-password-type-trigger').should('be.visible').click()

        cy.get('.form').should('be.visible').click()

        cy.get('#securityQuestion').should('be.visible').should('have.value','What is your favorite food?')
        cy.get('#securityAnswer').should('be.visible').should('be.enabled').type('Egusi Soup')
        cy.get('.btn').should('be.visible').click()

        //i didnt proceed after here because of no intention to save money.

        //cy.get('#otp').should('be.visible').should('be.enabled').type('454279')  //check your phone for the OTP and type it here
        //cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@i23')
        //cy.get('.btn').should('be.visible').click()
    })
})*/















//Initial Process. 1st one
/*describe('Renmoney APP Suite',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Home -')  //verify page title. Became this after sign up and initial log in
    })
    it('Savings Process: Easy Saving Package',function()
    {
        cy.get('.elementor-menu-toggle__icon--open').click()   //Click the 3-line drop down menu
        cy.get('.menu-item-6431 > .elementor-item').should('be.visible').click()   //click on login option
        cy.title().should('eq','Online Savings | Earn up to 12% | Save from #500 -')   //verify page title

        cy.get('.elementor-element-2e7e228 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text').should('be.visible').click()  //Smart Goal
        cy.title().should('eq','Renmoney')

        cy.get('.font-15 > .text-alt').should('be.visible').click()  //login
        cy.title().should('eq','Renmoney')

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').click()

        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@123')
        cy.get('#change-password-type-trigger').should('be.visible').click()  //makes password visible
        cy.get('#change-password-type-trigger').should('be.visible').click()  //hides password again
        cy.get('.btn').should('be.visible').click()
        cy.title().should('eq','Renmoney')
    
        cy.get('app-sidebar > [title="Create"] > .menu-title').should('be.visible').click()  //create
        cy.title().should('eq','Renmoney')

        cy.get(':nth-child(1) > app-main-create-card > .card > .card-body > .text-right > .btn').should('be.visible').click()  //create plan
        cy.title().should('eq','Renmoney')

        cy.get('#plan-name').should('be.visible').should('be.enabled').type('Fortune Plan')
        cy.get('app-plan-name > .row > .col-lg-7 > .card > .card-body > .form > .btn').should('be.visible').click()
        
        cy.get('#amount').should('be.visible').clear('20000').type('30000')     //amount to deposit
        cy.get(':nth-child(1) > .p-2 > .mb-0').select()   //for how long. stopped working here. The element is being covered by another element.
        //There have been situations where Cypress does not correctly allow you to interact with an element that should be interactable. .click({force: true}) didn't help.
        
        cy.get('.pb-4 > .btn').should('be.visible').click()

    })
})*/
