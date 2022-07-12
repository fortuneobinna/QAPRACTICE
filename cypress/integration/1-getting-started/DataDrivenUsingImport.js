import selectors from "C:/Users/Fortune/Desktop/SoftwareTesting/CypressThings/cypress/fixtures/selectors.json"
                                                                                                                                                                          
describe('My Data Driven Test Suite',function()
{

    //it('Using cypress.json file to represent data',function()
    //{
       //cy.visit("/")                                                                                                                                                                          
    //})
    
    it('Using fixtures to represent data',function()
    {
        cy.visit(selectors.url)
        cy.get(selectors.emailsel).clear(selectors.email)
        cy.get(selectors.passwordsel).clear(selectors.password)
        
        cy.get(selectors.emailsel).type(selectors.email)
        cy.get(selectors.passwordsel).type(selectors.password)
        
    })

    it('Login button test',function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/admin/')  //required to tackle the cross origin error message: 'Cypress detected a cross origin error happened on page load'
        cy.get(selectors.submit).click()   //using only this will cause the cross origin error
    })
})