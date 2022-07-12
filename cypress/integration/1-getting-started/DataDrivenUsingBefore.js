describe('My Data Driven Test Suite',function()
{
    before(function()
    {
        cy.fixture('selectors').then(function(data)
        {
            this.data=data
        })
    })

    it('Using fixtures to represent data',function()
    {
        cy.visit(this.data.url)
        cy.get(this.data.emailsel).clear(this.data.email)
        cy.get(this.data.passwordsel).clear(this.data.password)
        
        cy.get(this.data.emailsel).type(this.data.email)
        cy.get(this.data.passwordsel).type(this.data.password)
        cy.get(this.data.submit).click()
    })
})





