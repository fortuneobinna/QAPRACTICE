import renmoney from "C:/Users/Fortune/Desktop/SoftwareTesting/CypressThings/cypress/fixtures/renmoney.json"

describe('Home Page Icons- Integration Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit(renmoney.url)
        cy.url().should('include',renmoney.renmoney)   //verify url
        cy.title().should('eq',renmoney.verifytitle)  //verify page title.
    })

    it('Loans Icon',function()   //not stable. sometimes it shows the 3 button drop down and sometimes it doesn't.
    {
        cy.get('.nav__menu > :nth-child(1)').should('be.visible').click()  //loans 
        cy.title().should('eq',renmoney.loantitle)    //verify page title
        cy.url().should('include',renmoney.loans)     //verify url
        
        //Frequently asked Questions(Drop Down)  
        cy.get('.faq_question_wrapper > :nth-child(1)').should('be.visible').contains('Am I eligible for a Renmoney loan?')             
        cy.get('.faq_question_wrapper > :nth-child(2)').should('be.visible').contains('How much can I borrow?')
        cy.get('.faq_question_wrapper > :nth-child(3)').should('be.visible').contains('What documents do I need to apply for a loan?')
        cy.get('.faq_question_wrapper > :nth-child(4)').should('be.visible').contains('Why does Renmoney need my BVN')
        cy.get('.faq_question_wrapper > :nth-child(5)').should('be.visible').contains('Why was I offered less than what I applied for?')
        
        //Drop Down Contents
        cy.get(':nth-child(1) > .answer > .answer-text').should('not.be.visible').contains('qualify')
        cy.get(':nth-child(2) > .answer > .answer-text').should('not.be.visible').contains('months')
        cy.get(':nth-child(3) > .answer > .answer-text').should('not.be.visible').contains('bill')
        cy.get(':nth-child(4) > .answer > .answer-text').should('not.be.visible').contains('requirements')
        cy.get(':nth-child(5) > .answer > .answer-text').should('not.be.visible').contains('request')
        
        cy.get(renmoney.body).should('be.visible').contains(renmoney.needs)
        
        cy.go('back')
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.verifyurl)   //verify url
    })

    it('Loan: Text Icon',function()  
    {
        cy.get('.hero_content > ._1 > .span2').should('be.visible').contains(renmoney.loans).click()
        cy.title().should('eq',renmoney.Renmoney)   //verify page title
        cy.url().should('include',renmoney.loans)   //verify url

        cy.go('back')
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.renmoney)   //verify url
    })

    it('Savings Icon',function()
    {
        cy.get('.nav__menu > :nth-child(2)').should('be.visible').click()   //savings
        cy.title().should('eq',renmoney.savingstitle)   //verify page title
        cy.url().should('include',renmoney.savings)   //verify url

        cy.get(renmoney.body).should('be.visible').contains('interest')

        //frequently asked questions drop down menu
        cy.get('.faq_question_wrapper > :nth-child(1)').should('be.visible').contains('Can')
        cy.get('.faq_question_wrapper > :nth-child(2)').should('be.visible').contains('much')
        cy.get('.faq_question_wrapper > :nth-child(3)').should('be.visible').contains('Account')
        cy.get('.faq_question_wrapper > :nth-child(4)').should('be.visible').contains('long')

        //frequently asked questions contents
        cy.get(':nth-child(1) > .answer > .answer-text').should('not.be.visible').contains('add')
        cy.get(':nth-child(2) > .answer > .answer-text').should('not.be.visible').contains('view')
        cy.get(':nth-child(3) > .answer > .answer-text').should('not.be.visible').contains('name')
        cy.get(':nth-child(4) > .answer > .answer-text').should('not.be.visible').contains('investment')

        cy.go('back')
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.renmoney)   //verify url
    })

    it('Save Now Icon',function()
    {
        cy.get(':nth-child(3) > .container > .products-wrapper > .pl-80 > .register-button').should('be.visible').contains('Save Now').click()
        cy.title().should('eq',renmoney.Renmoney)
        cy.url().should('include',renmoney.auth)

        cy.get('.d-flex').should('be.visible').contains('Let')

        cy.go('back')
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.renmoney)   //verify url
    })

    it('Learn More beside Save Now Icon',function()
    {
        cy.get(':nth-child(3) > .container > .products-wrapper > .pl-80 > .p-link > .large-link').should('be.visible').contains('Learn more').click()
        cy.title().should('eq',renmoney.savingstitle)
        cy.url().should('include',savings.savings)

        //coockies
        cy.get('.cc-window').should('be.visible').contains('experience')
        cy.get('.cc-btn').should('be.visible').contains('OK!').click()

        cy.get(body.body).should('be.visible').contains('Smart')

        cy.go(-1)
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.renmoney)   //verify url
    })

    it('Deposits Icon',function()
    {
        cy.get('.nav__menu > :nth-child(3)').should('be.visible').contains('Deposits').click()   //Deposits
        cy.title().should('eq',renmoney.investtitle)     //verify page title
        cy.url().should('include',deposits.deposits)  //verify url

        cy.get(body.body).should('be.visible').contains('Earn')

        cy.go('back')
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.renmoney)   //verify url
    })

    it('Log In Icon',function()
    {
        //cy.get('.elementor-menu-toggle__icon--open').should('be.visible').click()   //Click the 3-line drop down menu
        cy.get('.nav__cta > .nav-link-cta-secondary').should('be.visible').click()   //Login
        cy.title().should('eq',renmoney.Renmoney)   //verify page title
        cy.url().should('include',login.login)   //verify url

        cy.get(body.body).should('be.visible').contains('sign')   

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').contains('Get started').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/login')   //verify url

        cy.get('#email').should('be.visible').clear('fortuneobinna6@gmail.com').type('fortuneobinna6@gmail.com')
        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@123')
        cy.get('#change-password-type-trigger').should('be.visible').click().click()
        cy.get('.btn').should('be.visible').contains('Login').click()
        cy.title().should('eq',renmoney.Renmoney)   //verify page title
        cy.url().should('include','auth/unblock')   //verify url

        cy.get('#securityQuestion').should('be.visible')
        cy.get('#securityAnswer').should('be.visible').should('be.enabled').type('Egwusi Soup')
       cy.get('.btn').should('be.visible').contains('Submit').click()   //page did not open because user is blocked. 

    })
})