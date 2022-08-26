import renmoney from "C:/Users/Fortune/Desktop/SoftwareTesting/CypressThings/cypress/fixtures/renmoney.json"

describe('Home Page: Apply Icons- Integration Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit(renmoney.url)
        cy.url().should('include',renmoney.renmoney)   //verify url
        cy.title().should('eq',renmoney.verifytitle)  //verify page title.
    })

    it('Apply Now Icon',function()
    {
        cy.get(renmoney.applynow).should('be.visible').contains(renmoney.applycontains).click()
        //cy.title().should('eq',renmoney.verifyurl)  //verify page title .unstable
        //cy.url().should('include','loan')  //verify url. not stable. passes at a run and fails at a re-run

        cy.get(renmoney.body).should('be.visible').contains(renmoney.convenient)
        
        cy.go(-1)
        cy.title().should('eq',renmoney.verifytitle)    //verify page title
        cy.url().should('include',renmoney.renmoney)   //verify url
    })

    it('Apply Now 2nd Icon',function()
    {
        cy.get(renmoney.apply2nd).should('be.visible').contains(renmoney.applycontains).click()
        cy.title().should('eq',renmoney.Renmoney)     //verify page title
        cy.url().should('include',renmoney.login)   //verify url. not stable. passes at a run and fails at a re-run

        /*//Frequently asked questions(Drop Downs)  //unstable
        cy.get(':nth-child(1) > .accordion-item-header').contains('eligible').click()
        cy.get(':nth-child(1) > .accordion-item-body > .accordion-item-body-content').should('be.visible').contains('To qualify')

        cy.get(':nth-child(2) > .accordion-item-header').should('be.visible').contains('much').click()
        cy.get(':nth-child(2) > .accordion-item-body > .accordion-item-body-content').contains('You can get')

        cy.get(':nth-child(3) > .accordion-item-header').should('be.visible').contains('Document').click()
        cy.get(':nth-child(3) > .accordion-item-body > .accordion-item-body-content').contains('You need your')

        cy.get(':nth-child(4) > .accordion-item-header').should('be.visible').contains('repayment').click()
        cy.get(':nth-child(4) > .accordion-item-body > .accordion-item-body-content').contains('If you')
        
        cy.get('body').should('be.visible').contains('eligible')*/

        cy.go(-1)
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.renmoney)   //verify url
    })

    it('Learn More Apply Now 2nd Icon',function()
    {
        cy.get(renmoney.learnapply).should('be.visible').click()
        cy.title().should('eq',renmoney.learntitle)
        cy.url().should('include',renmoney.loans)

       /*//coockies
        cy.get('.cc-window').should('be.visible').contains('experience')
        cy.get('.cc-btn').should('be.visible').contains('OK!').click()

        //Frequently asked questions drop downs
        cy.get('.faq_question_wrapper > :nth-child(1)').should('be.visible').contains('eligible').click()
        cy.get(':nth-child(1) > .answer > .answer-text').should('be.visible').contains('To qualify')
        
        cy.get('.faq_question_wrapper > :nth-child(2)').should('be.visible').contains('much').click()
        cy.get(':nth-child(2) > .answer > .answer-text').should('be.visible').contains('six')
        
        cy.get('.faq_question_wrapper > :nth-child(3)').should('be.visible').contains('document').click()
        cy.get(':nth-child(3) > .answer > .answer-text').should('be.visible').contains('utility')
        
        cy.get('.faq_question_wrapper > :nth-child(4)').should('be.visible').contains('BVN').click()
        cy.get(':nth-child(4) > .answer > .answer-text').should('be.visible').contains('CBN')
        
        cy.get('.faq_question_wrapper > :nth-child(5)').should('be.visible').contains('offer').click()
        cy.get(':nth-child(5) > .answer > .answer-text').should('be.visible').contains('debt')*/

        cy.get(renmoney.body).should('be.visible').contains(renmoney.needs)

        cy.go(-1)
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.renmoney)   //verify url
    })
})