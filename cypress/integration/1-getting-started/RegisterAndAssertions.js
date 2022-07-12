describe('GUI Elements Suite ',function()
{
    it('Verify Input Boxes, Radio Buttons and Check Boxes',function()
    {
        //Opening the Web Page
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include','Register')
        
        //Input Boxes
        cy.get('[placeholder="First Name"]').should('be.visible').should('be.enabled').type('Fortune')
        cy.get('[placeholder="Last Name"]').should('be.visible').should('be.enabled').type('Obinna')
        cy.get('[ng-model="Adress"]').should('be.visible').should('be.enabled').type('Lagos')
        cy.get('input[type="email"]').should('be.visible').should('be.enabled').type('abc@gmail.com')
        cy.get('input[type="tel"]').should('be.visible').should('be.enabled').type('08066012527')
        
        //Radio Buttons
        cy.get('[value="Male"]').should('be.visible').should('not.be.checked').click()
        cy.get('[value="FeMale"]').should('be.visible').should('not.be.checked').click()

        //Check Boxes
        //Positive Validation
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').should('have.value','Hockey')
        
        //Negative Validation
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        //Single Statement
        cy.get('[type="checkbox"]').check(['Cricket','Hockey']).should('be.checked')
    })
    
    it('Drop Downs',function()
    {
        //Single-select
        cy.get('#Skills').select('Android').should('have.value','Android')

        //Multi-select option
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('Arabic').click()
        cy.get('.ui-corner-all').contains('Croatian').click()
        
        //Searchable Drop Downs
        cy.get('.select2-selection--single').click({force:true})
        cy.get('[type="search"]').type('Den')
        cy.get('[type="search"]').type('{enter}')

        //single select
        cy.get('#yearbox').select('1934').should('have.value','1934')
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('August').should('have.value','August')
        cy.get('#daybox').select('7').should('have.value','7')
        })
        
        //Input box
        it('Password',function()
        {
        
        cy.get('#firstpassword').should('be.visible').should('be.enabled').type('Ifesinachi1')
        cy.get('#secondpassword').should('be.visible').should('be.enabled').type('Ifesinachi1')
        })

        //Sumit Button
        it('Submit Button',function()
        {
            cy.get('#submitbtn').should('be.visible').click()
        })
        
})