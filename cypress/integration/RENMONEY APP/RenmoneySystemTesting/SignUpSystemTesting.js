describe('Renmoney APP Suite',function()
{
    it('Sign Up Test',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title

        cy.get('.nav__cta > .nav-link-cta-secondary').should('be.visible').click()  //click on login button
        cy.title().should('eq','Renmoney')  //verify new page title

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').click()
        cy.title().should('eq','Renmoney')

        cy.get(':nth-child(1) > .form-group > #firstName').should('be.visible').should('be.enabled').type('Fortune')
        cy.get(':nth-child(2) > .form-group > #firstName').should('be.visible').should('be.enabled').type('Ifesi')
        cy.get('#lastName').should('be.visible').should('be.enabled').type('Obinna')
        cy.get('#phoneNumber').should('be.visible').should('be.enabled').type('08066012527')
        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@123')  //app sugested password: g@N94qvz6wguHiP
        cy.get('#change-password-type-trigger').should('be.visible').click()  //makes the password visible
        cy.get('#change-password-type-trigger').should('be.visible').click()  //hides the password again
        cy.get('#securityQuestion').select('What is your favorite food?'). should('have.value','What is your favorite food?')  //drop down menu bar
        cy.get('#securityAnswer').should('be.visible').should('be.enabled').type('Egusi Soup')

        cy.get('.btn').should('be.visible').click()   //submit button

        cy.get('#otp').should('be.visible').should('be.enabled').type('719962')  //OTP sent to my phone number through text message
        cy.get('.btn').should('be.visible').click()
    })
})

//Sign up completed successfully. Proceed to log in.
//To re-run this test, input a different email and password in the script, because this script is meant for registration.