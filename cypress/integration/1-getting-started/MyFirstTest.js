describe('FIRST SUITE',function()
{
it('verify title of page positive',function()
{
   cy.visit('https://demo.nopcommerce.com/')
   cy.title().should('eq','nopCommerce demo store')
})


it('verify title of page negative',function()
{
   cy.visit('https://demo.nopcommerce.com/')
   cy.title().should('eq','nopCommerce store')
})
})