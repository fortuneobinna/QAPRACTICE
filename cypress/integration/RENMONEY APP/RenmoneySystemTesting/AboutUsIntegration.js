describe('Renmoney APP Suite',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title. 
    })
    it('About Us',function()
    {
        cy.get('.nav__menu > :nth-child(4)').should('be.visible').click()   //click on About Us 
        cy.title().should('eq','About Renmoney')
        cy.url().should('include','about')   //verify url
    })
    
    it('Come with us',function()
    {
        cy.get('.hero_button').should('be.visible').contains('work').click()
        cy.url().should('include','careers')   //verify url
        cy.title().should('eq','Careers')    //verify page title
    })
        
    it('Entire Body -Careers Page',function()
    {
        cy.get('body').should('be.visible').contains('Innovative')
    })

    it('See Vacancies',function()
    {
        cy.get('.career_cta').contains('Vacancies').click()
        cy.go('back')
        cy.title().should('eq','About Renmoney')  //verify page title
        cy.url().should('include','about')   //verify url
    })
    
    it('Entire Body -About Page',function()
    {
        cy.get('body').should('be.visible').contains('Financial')

        cy.go(-1)
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title.
    })
})










