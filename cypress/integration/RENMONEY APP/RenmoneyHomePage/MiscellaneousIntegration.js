describe('Renmoney APP Suite',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title. 
    })
 
    it('Company',function()
    { 
        cy.get(':nth-child(1) > :nth-child(2) > .footer-link').should('be.visible').contains('About').click()  //About Us
        cy.url().should('include','about')   //verify url
        cy.title().should('eq','About Renmoney')  //verify page title.

        cy.get(':nth-child(1) > :nth-child(3) > .footer-link').should('be.visible').contains('Car').click()   //Career
        cy.url().should('include','careers')   //verify url
        cy.title().should('eq','Careers')  //verify page title.

        cy.get('.tablet > :nth-child(1) > :nth-child(4) > .footer-link').should('be.visible').contains('C').click()  //Contact. 
        cy.url().should('include','contact')   //verify url
        //cy.title().should('eq','We're here to help')  //verify page title.   //not verifiable because of the apostrophy contained in "We're..." -it causes error.
    })

    it('Products',function()
    {
        cy.get(':nth-child(2) > :nth-child(2) > .footer-link').should('be.visible').contains('Loans').click()
        cy.url().should('include','loans')   //verify url
        cy.title().should('eq','Convenient Personal & Micro-business Loans')  //verify page title.

        cy.get(':nth-child(2) > :nth-child(3) > .footer-link').should('be.visible').contains('Savings').click()
        cy.url().should('include','savings')   //verify url
        cy.title().should('eq','Online savings | Earn up to 12% | Save from ₦500')  //verify page title.

        cy.get(':nth-child(2) > :nth-child(4) > .footer-link').should('be.visible').contains('Fixed Deposit').click()
        cy.url().should('include','deposits')   //verify url
        cy.title().should('eq','Renmoney Fixed Deposits | Start online today')  //verify page title.
    })

    it('Legal',function()
    {
        cy.get(':nth-child(3) > :nth-child(2) > .footer-link').should('be.visible').contains('Pol').click()   //Privacy Policy
        cy.url().should('include','privacy-policy')   //verify url
        cy.title().should('eq','Privacy Policy')  //verify page title.

        cy.get(':nth-child(3) > :nth-child(3) > .footer-link').should('be.visible').contains('Conditions').click()   //Terms and Conditions
        cy.url().should('include','terms')   //verify url
        cy.title().should('eq','Terms')  //verify page title.
})

    it('Contact',function()
    {
        
        cy.get('.list.contact > :nth-child(2)').should('be.visible')  //23, Awolowo Road... 
        cy.get('.email_link').should('be.visible')  //Email 
        //cy.get('.list.contact > :nth-child(4) > .footer-link').should('be.visible').click()  //Phone Call  
        
        //Whistle Blower -System Testing
        cy.get(':nth-child(5) > .footer-link').should('be.visible').click()   //whistle Blower
        cy.get('#Issue').select('General Issues').should('have.value','General Issues')
        cy.get('#Name-of-staff-partners-involved').should('be.visible').should('be.enabled').type('Fortune')
        cy.get('#Concern-incident').should('be.visible').should('be.enabled').type('Cypress Automation Testing of App')
        cy.get('#Name').should('be.visible').should('be.enabled').type('Fortune')
        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('#Phone-Number').should('be.visible').should('be.enabled').type('08066012527')
       //cy.get('.submit_button').should('be.visible').click()  //submit
        cy.url().should('include','whistleblowing')   //verify url  
        cy.title().should('eq','Whistle Blower')  //verify page title.
    })

    it('Social',function()
    {
        cy.get(':nth-child(2) > .link').should('be.visible').click()   //facebook
        cy.get(':nth-child(3) > .link').should('be.visible').click()  //Linkedin
        cy.get(':nth-child(4) > .link').should('be.visible').click()     //Twitter
        cy.get(':nth-child(5) > .link').should('be.visible').click()    //Instagram
        cy.get(':nth-child(6) > .link').should('be.visible').click()  //Medium
    })
})



















//initial Script.worked. Element Selectors were changed by the developers to new selectors as above
/*describe('Renmoney APP Suite',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title. 
    })
 
    it('Company',function()
    { 
        cy.get(':nth-child(1) > :nth-child(2) > .footer-link').should('be.visible').contains('About').click()  //About Us
        cy.url().should('include','about')   //verify url
        cy.title().should('eq','About Renmoney')  //verify page title.

        cy.get(':nth-child(1) > :nth-child(3) > .footer-link').should('be.visible').contains('Car').click()   //Career
        cy.url().should('include','careers')   //verify url
        cy.title().should('eq','Careers')  //verify page title.

        cy.get(':nth-child(1) > :nth-child(3) > .footer-link').should('be.visible').contains('Contact').click()  //Contact. 
        cy.url().should('include','contact')   //verify url
        //cy.title().should('eq','We're here to help')  //verify page title.   //not verifiable because of the apostrophy contained in "We're..." -it causes error.
    })

    it('Products',function()
    {
        cy.get('.elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').should('be.visible').contains('Loans').click({force:true})
        cy.url().should('include','loans')   //verify url
        cy.title().should('eq','Convenient Personal & Business Loans')  //verify page title.

        cy.get('.elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').should('be.visible').contains('Savings').click({force:true})
        cy.url().should('include','savings')   //verify url
        cy.title().should('eq','Online Savings | Earn up to 12% | Save from #500')  //verify page title.

        cy.get('.elementor-element-363abec > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').should('be.visible').contains('Fixed Deposit').click()
        cy.url().should('include','deposits')   //verify url
        cy.title().should('eq','Renmoney Fixed Deposits | Start online today')  //verify page title.
    })

     it('Legal',function()
    {
        cy.get('.elementor-element-3431323 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').should('be.visible').contains('Conditions').click()   ///Terms and Conditions
        cy.url().should('include','terms')   //verify url
        cy.title().should('eq','Terms')  //verify page title.

        cy.get('.elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').should('be.visible').contains('Pol').click({force:true})   //Privacy Policy
        cy.url().should('include','privacy-policy')   //verify url
        cy.title().should('eq','Privacy Policy')  //verify page title.
})

    it('Contact',function()
    {
        
        cy.get('.elementor-widget-container > .premium-bullet-list-box > .elementor-repeater-item-a136908 > .premium-bullet-list-link').should('be.visible')  //23, Awolowo Road... 
        cy.get('.elementor-element-271a80a > .elementor-widget-container > .premium-bullet-list-box > .elementor-repeater-item-960bed8 > .premium-bullet-list-link').should('be.visible')  //Phone Call  cy.get('.elementor-element-271a80a > .elementor-widget-container > .premium-bullet-list-box > .elementor-repeater-item-960bed8 > .premium-bullet-list-link').should('be.visible').click()  //Phone Call  
        cy.get('.elementor-element-271a80a > .elementor-widget-container > .premium-bullet-list-box > .elementor-repeater-item-2cb0451 > .premium-bullet-list-link').should('be.visible')   //Email

        //Whistle Blower -System Testing
        cy.get('.elementor-element-271a80a > .elementor-widget-container > .premium-bullet-list-box > .elementor-repeater-item-bbe5ed1 > .premium-bullet-list-link').should('be.visible').click()   //whistle Blower
        cy.get('#wpcf7-f13833-p12592-o2 > .wpcf7-form > .renmoney-form > :nth-child(1) > .wpcf7-form-control-wrap > .wpcf7-form-control').select('General Issues').should('have.value','General Issues')
        cy.get('#wpcf7-f13833-p12592-o2 > .wpcf7-form > .renmoney-form > :nth-child(3) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').should('be.visible').should('be.enabled').type('Fortune')
        cy.get('#wpcf7-f13833-p12592-o2 > .wpcf7-form > .renmoney-form > :nth-child(4) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').should('be.visible').should('be.enabled').type('Cypress Automation Testing of App')
        cy.get('#wpcf7-f13833-p12592-o2 > .wpcf7-form > .renmoney-form > :nth-child(6) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').should('be.visible').should('be.enabled').type('Fortune')
        cy.get('#wpcf7-f13833-p12592-o2 > .wpcf7-form > .renmoney-form > :nth-child(7) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('#wpcf7-f13833-p12592-o2 > .wpcf7-form > .renmoney-form > :nth-child(8) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').should('be.visible').should('be.enabled').type('08066012527')
       // cy.get('#wpcf7-f13833-p12592-o2 > .wpcf7-form > .renmoney-form > :nth-child(9) > .wpcf7-form-control').should('be.visible').click()  //submit
        cy.url().should('include','whistleblowing')   //verify url  
        cy.title().should('eq','Whistle Blower')  //verify page title.
    })

     it('Social',function()
    {
        cy.get('.elementor-element-d448425 > .elementor-widget-container > .elementor-social-icons-wrapper > :nth-child(1) > .elementor-icon > .e-font-icon-svg > use').should('be.visible').click({force:true})   //facebook
        cy.get('.elementor-element-d448425 > .elementor-widget-container > .elementor-social-icons-wrapper > :nth-child(2) > .elementor-icon > .e-font-icon-svg > use').should('be.visible').click({force:true})  //Linkedin
        cy.get('.elementor-element-d448425 > .elementor-widget-container > .elementor-social-icons-wrapper > :nth-child(3) > .elementor-icon').should('be.visible').click()     //Twitter
        cy.get('.elementor-element-d448425 > .elementor-widget-container > .elementor-social-icons-wrapper > :nth-child(4) > .elementor-icon > .e-font-icon-svg').should('be.visible').click()    //Instagram
        cy.get('.elementor-element-d448425 > .elementor-widget-container > .elementor-social-icons-wrapper > :nth-child(5) > .elementor-icon > .e-font-icon-svg > use').should('be.visible').click()  //Medium
    })
})*/