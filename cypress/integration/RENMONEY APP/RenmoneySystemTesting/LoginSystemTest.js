describe('Login -System Test Suite',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title.
    })
    
    it('Positive Test -Valid Email & Valid Password',function()
    {
        cy.get('.nav__cta > .nav-link-cta-secondary').should('be.visible').click()   //Login
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','login')   //verify url   

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').contains('Get started').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/login')   //verify url

        cy.get('#email').should('be.visible').clear('fortuneobinna6@gmail.com').type('fortuneobinna6@gmail.com')
        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@123')
        cy.get('#change-password-type-trigger').should('be.visible').click().click()
        cy.get('.btn').should('be.visible').contains('Login').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/unblock')   //verify url

        cy.get('#securityQuestion').should('be.visible')
        cy.get('#securityAnswer').should('be.visible').should('be.enabled').type('Egusi Soup')
        cy.get('.btn').should('be.visible').contains('Submit').click()   
        
        //i didnt proceed after here because of no intention to carry out any activity.

        /*cy.get('#otp').should('be.visible').should('be.enabled').type('454279')  //check your phone for the OTP and type it here
        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@i23')
        cy.get('.btn').should('be.visible').click()*/ 
    })

    /*it('Negative Test -Invalid Email & Valid Password  ',function()
    {
        cy.get('.nav__cta > .nav-link-cta-secondary').should('be.visible').click()   //Login
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','login')   //verify url   

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').contains('Get started').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/login')   //verify url

        cy.get('#email').should('be.visible').clear('fortuneobinna6@gmail.com').type('fortuneobinna6gmail.com')
        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@123')
        cy.get('#change-password-type-trigger').should('be.visible').click().click()
        cy.get('.btn').should('be.visible').contains('Login').click()
    })

    it('Negative Test -Valid Email & Invalid Password',function()  //BUG 1 //Expected to fail but did not both in automation and the manual tests.
    {
        cy.get('.nav__cta > .nav-link-cta-secondary').should('be.visible').click()   //Login
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','login')   //verify url   

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').contains('Get started').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/login')   //verify url

        cy.get('#email').should('be.visible').clear('fortuneobinna6@gmail.com').type('fortuneobinna6@gmail.com')
        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@12')
        cy.get('#change-password-type-trigger').should('be.visible').click().click()
        cy.get('.btn').should('be.visible').contains('Login').click()
    })

    it('Negative Test -Invalid Email & Invalid Password ',function()
    {
        cy.get('.nav__cta > .nav-link-cta-secondary').should('be.visible').click()   //Login
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','login')   //verify url   

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').contains('Get started').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/login')   //verify url

        cy.get('#email').should('be.visible').clear('fortuneobinna6@gmail.com').type('fortuneobinna6gmail.com')
        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@12')
        cy.get('#change-password-type-trigger').should('be.visible').click().click()
        cy.get('.btn').should('be.visible').contains('Login').click()
    })

    it('Positive Test -Valid Email & Empty Password',function()
    {
        cy.get('.nav__cta > .nav-link-cta-secondary').should('be.visible').click()   //Login
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','login')   //verify url   

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').contains('Get started').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/login')   //verify url

        cy.get('#email').should('be.visible').clear('fortuneobinna6@gmail.com').type('fortuneobinna6@gmail.com')
        cy.get('#password').should('be.visible').should('be.enabled').type('')
        cy.get('#change-password-type-trigger').should('be.visible').click().click()
        cy.get('.btn').should('be.visible').contains('Login').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/unblock')   //verify url
    })

    it('Positive Test -Empty Email & Valid Password',function()
    {
        cy.get('.nav__cta > .nav-link-cta-secondary').should('be.visible').click()   //Login
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','login')   //verify url   

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').contains('Get started').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/login')   //verify url

        cy.get('#email').should('be.visible').clear('fortuneobinna6@gmail.com').type('fortuneobinna6@gmail.com')
        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@123')
        cy.get('#change-password-type-trigger').should('be.visible').click().click()
        cy.get('.btn').should('be.visible').contains('Login').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/unblock')   //verify url
    })

    it('Positive Test -Empty Email & Empty Password',function()
    {
        cy.get('.nav__cta > .nav-link-cta-secondary').should('be.visible').click()   //Login
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','login')   //verify url   

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').contains('Get started').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/login')   //verify url

        cy.get('#email').should('be.visible').clear('fortuneobinna6@gmail.com').type('')
        cy.get('#password').should('be.visible').should('be.enabled').type('')
        cy.get('#change-password-type-trigger').should('be.visible').click().click()
        cy.get('.btn').should('be.visible').contains('Login').click()
        cy.title().should('eq','Renmoney')   //verify page title
        cy.url().should('include','auth/unblock')   //verify url
    })*/
})













/*describe('Renmoney APP Suite',function()
{
    it('Initial Login Test',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title

        cy.get('.nav__cta > .nav-link-cta-secondary').should('be.visible').click()  //click on login button
        cy.title().should('eq','Renmoney')  //verify new page title

        cy.get('#email').should('be.visible').should('be.enabled').type('fortuneobinna6@gmail.com')
        cy.get('.btn').should('be.visible').click()
        cy.title().should('eq','Renmoney')

        cy.get('#password').should('be.visible').should('be.enabled').type('Obinna@123')
        cy.get('#change-password-type-trigger').should('be.visible').click()  //makes the password visible
        cy.get('#change-password-type-trigger').should('be.visible').click()  //hides the password again

        cy.get('.btn').should('be.visible').click()   //submit button

        
        cy.get('#otp').should('be.visible').should('be.enabled').type('079720')  //OTP sent to my phone number through text message. This is applicable when loggin in for the first time. OTP will not be required for subsequent login.
        cy.get('.btn').should('be.visible').click()
    })
})
//Initial Login completed successfully. Your Dashboard page opens.*/
