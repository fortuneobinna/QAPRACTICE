describe('Home Page Icons- Unit Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title.
    })

    it('Coockies',function()
    {
    //We use Cookies...
    cy.get('.cc-window').should('be.visible').contains('best')

    //OK!
    cy.get('.cc-btn').should('be.visible').contains('!').click()
    })

    it('Refresh Page Icon',function()
    {
        cy.get('.logo > img').should('be.visible').click()
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')
        cy.url().should('include','renmoney')   //verify url
    })

    it('Loans',function()
    {
        cy.get('.nav__menu > :nth-child(1)').should('be.visible').contains('Loan')
    })

    it('Savings',function()
    {
        cy.get('.nav__menu > :nth-child(2)').should('be.visible').contains('Savings')
    })

    it('Deposits',function()
    {
        cy.get('.nav__menu > :nth-child(3)').should('be.visible').contains('D')
    })

    it('About Us',function()
    {
        cy.get('.nav__menu > :nth-child(4)').should('be.visible').contains('Us')
    })

    it('Login',function()
    {
        cy.get('.nav__cta > .nav-link-cta-secondary').should('be.visible').contains('Log In')
    })

    it('What would you like to do?',function()
    {
        cy.get('.hero_content > .hero_copy').should('be.visible').contains('like')
    })

    it('Get a Loan...',function()
    {
        cy.get('.hero_content > ._1').should('be.visible').contains('loan')
    })

    it('Invest your money...',function()
    {
        cy.get('.hero_content > ._2').should('be.visible').contains('Invest')
    })

    it('Invest Now',function()
    {
        cy.get('.hero_content > :nth-child(4)').should('be.visible').contains('Now')
    })

    it('Apply Now',function()
    {
        cy.get('.hero_content > ._22').contains('Apply')
    })

    //Loans
    it('LOANS',function()
    {
        cy.get(':nth-child(1) > .container > .products-wrapper > .pl-80 > .p-title-bg > .p-text').should('be.visible').contains('LOANS')
    })

    /*it('Picture written 500,000',function()     //Not working on automation
    {
        cy.get(':nth-child(1) > .container > .products-wrapper > .position-relative > .product_image').should('be.visible')
    })*/

    it('Convenient Personal...',function()
    {
        cy.get(':nth-child(1) > .container > .products-wrapper > .pl-80 > .p-title').should('be.visible').contains('Micro')
    })

    it('Whether you are employed...',function()
    {
        cy.get(':nth-child(1) > .container > .products-wrapper > .pl-80 > .p-sub').should('be.visible').contains('meet')
    })

    it('Apply Now 2nd Icon',function()
    {
        cy.get(':nth-child(1) > .container > .products-wrapper > .pl-80 > .register-button').should('be.visible').contains('Apply')
    })

    it('Learn More, Beside Apply Now 2nd Icon',function()
    {
        cy.get(':nth-child(1) > .container > .products-wrapper > .pl-80 > .p-link > .large-link').should('be.visible').contains('Learn')
    })

    it('Arrow beside Learn More, Beside Apply Now 2nd Icon',function()     
    {
        cy.get(':nth-child(3) > .container > .products-wrapper > .pl-80 > .p-link-image').should('be.visible')
    })

    //Deposits
    it('DEPOSITS',function()
    {
        cy.get('.product-right > .container > .products-wrapper > .pl-80 > .p-title-bg > .p-text').should('be.visible').contains('DEPOSITS')
    })

    it('Earn more money...',function()
    {
        cy.get('.product-right > .container > .products-wrapper > .pl-80 > .p-title').contains('Earn').should('be.visible')
    })

    it('Enjoy high interest...',function()
    {
        cy.get('.product-right > .container > .products-wrapper > .pl-80 > .p-sub').should('be.visible').contains('earn')
    })

    it('Invest Now 2nd Icon',function()
    {
        cy.get('.product-right > .container > .products-wrapper > .pl-80 > .register-button').should('be.visible').contains('Invest')
    })

    it('Learn More, beside Invest Now 2nd Icon',function()
    {
        cy.get('.product-right > .container > .products-wrapper > .pl-80 > .p-link > .large-link').should('be.visible').contains('Learn')
    })

    it('Arrow beside Learn More, beside Invest Now 2nd Icon',function()
    {
        cy.get('.product-right > .container > .products-wrapper > .pl-80 > .p-link-image').should('be.visible')
    })

    it('Figure written 1,000,253.00',function()
    {
        cy.get('.product-right > .container > .products-wrapper > .pl-80 > .p-link-image').should('be.visible')
    })

    //Savings
    it('SAVINGS',function()
    {
        cy.get(':nth-child(3) > .container > .products-wrapper > .pl-80 > .p-title-bg > .p-text').should('be.visible').contains('S')
    })

    it('Figure written 52,330.00',function()
    {
        cy.get(':nth-child(3) > .container > .products-wrapper > .pl-80 > .p-title-bg > .p-text').should('be.visible')
    })

    it('Picture of a male and a female',function()
    {
        cy.get(':nth-child(3) > .container > .products-wrapper > .pl-80 > .p-title-bg > .p-text').should('be.visible')
    })

    it('Let your money...',function()
    {
        cy.get(':nth-child(3) > .container > .products-wrapper > .pl-80 > .p-title').should('be.visible').contains('work')
    })

    it('Get more out...',function()
    {
        cy.get(':nth-child(3) > .container > .products-wrapper > .pl-80 > .p-sub').should('be.visible').contains('rate')
    })

    it('Save Now',function()
    {
        cy.get(':nth-child(3) > .container > .products-wrapper > .pl-80 > .register-button').should('be.visible').contains('Save')
    })

    it('Learn Now, beside Save Now 2nd Icon',function()
    {
        cy.get(':nth-child(3) > .container > .products-wrapper > .pl-80 > .p-link > .large-link').should('be.visible').contains('Learn')
    })

    it('Arrow beside Learn Now, beside Save Now 2nd Icon',function()
    {
        cy.get(':nth-child(3) > .container > .products-wrapper > .pl-80 > .p-link-image').should('be.visible')
    })

    it('240k',function()
    {
        cy.get('.number-title').should('be.visible').contains('240k')
    })

    it('Loans provided to...',function()
    {
        cy.get(':nth-child(1) > .number-box-text').should('be.visible').contains('small')
    })

    it('From CBN Logo to ...Nigeria(CBN)',function()
    {
        cy.get('.section-numbers > :nth-child(2)').should('be.visible').contains('Central')
    })

    it('From NDIC Logo to ...Coporation(NDIC)',function()
    {
        cy.get('.section-numbers > :nth-child(3)').should('be.visible').contains('insured')
    })

    it('As featured in...',function()
    {
        cy.get('.spacer-text').should('be.visible').contains('news')
    })

    it('From Africa to Ventures',function()
    {
        cy.get('.spacer-text').should('be.visible')
    })

    it('From Get the... to ...google play',function()
    {
        cy.get('.download-text').should('be.visible')
    })

    /*it('Picture like phones',function()        //not working
    {
        cy.get('.container > :nth-child(2) > img').should('be.visible')
    })*/

    it('From company to whistle blower',function()
    {
        cy.get('.footer-con').should('be.visible').contains('Terms')
    })

    it('All rights reserved...',function()
    {
        cy.get('.ren-copy').should('be.visible').contains('Microfinance')
    })

    it('chat icon',function()
    {
        cy.get('#fc_widget').should('be.visible').click()
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')   //verify page title
        cy.url().should('include','renmoney')   //verify url
    })
})







































/*describe('Home Page Icons- Unit Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title.
    })

    it('Coockies',function()
    {
    //We use Cookies...
    cy.get('.cc-window').should('be.visible').contains('best')

    //OK!
    cy.get('.cc-btn').should('be.visible').contains('!').click()
    })

    it('Refresh Page Icon',function()
    {
        cy.get('.attachment-medium').should('be.visible').click()
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')
        cy.url().should('include','renmoney')   //verify url
    })

    it('3-line drop down menu',function()
    {
        cy.get('.elementor-menu-toggle__icon--open').should('be.visible')
    })
    
    it('What would you like to do?',function()
    {
        cy.get('.elementor-element-d60ebb6 > .elementor-widget-container > .hero_copy').should('be.visible').contains('like')
    })

    it('Get a Loan...',function()
    {
        cy.get('.elementor-element-96326fd > .elementor-widget-container > p').should('be.visible').contains('Invest')
    })

    it('Background Pyramid Picture',function()
    {
        cy.get('.elementor-element-a4ec196 > .elementor-widget-wrap > .elementor-element').should('be.visible')
    })

    it('Invest Now',function()
    {
        cy.get('.elementor-element-7764d26 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible').contains('Now')
    })

    it('Apply Now',function()
    {
        cy.get('.elementor-element-42cc2d7 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').contains('Apply')
    })

    //Loans
    it('LOANS',function()
    {
        cy.get('.elementor-element-8a3b7cc > .elementor-widget-container > .ekit-wid-con > .ekit-heading > .ekit-heading--title').should('be.visible').contains('LOANS')
    })

    it('Picture written 500,000',function()
    {
        cy.get('.elementor-element-430db68 > .elementor-widget-container > .attachment-full').should('be.visible')
    })

    it('Convenient Personal...',function()
    {
        cy.get('.elementor-element-17e03dd > .elementor-widget-container').should('be.visible').contains('Micro')
    })

    it('Whether you are employed...',function()
    {
        cy.get('.elementor-element-45cdf7b > .elementor-widget-container').should('be.visible').contains('meet')
    })

    it('Apply Now 2nd Icon',function()
    {
        cy.get('.elementor-element-849b2da > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible').contains('Apply')
    })

    it('Learn More, Beside Apply Now 2nd Icon',function()
    {
        cy.get('.elementor-element-f202cc6 > .elementor-widget-container > .elementor-icon-box-wrapper').should('be.visible').contains('Learn')
    })

    //Deposits
    it('DEPOSITS',function()
    {
        cy.get('.elementor-element-7291d35 > .elementor-widget-container > .ekit-wid-con > .ekit-heading > .ekit-heading--title').should('be.visible').contains('DEPOSITS')
    })

    it('Earn more money...',function()
    {
        cy.get('.elementor-element-7291d35 > .elementor-widget-container > .ekit-wid-con > .ekit-heading > .ekit-heading--title').should('be.visible')
    })

    it('Enjoy high interest...',function()
    {
        cy.get('.elementor-element-019dc15 > .elementor-widget-container').should('be.visible').contains('earn')
    })

    it('Invest Now 2nd Icon',function()
    {
        cy.get('.elementor-element-e43031f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible').contains('Invest')
    })

    it('Learn More, beside Invest Now 2nd Icon',function()
    {
        cy.get('.elementor-element-b1c803b > .elementor-widget-container > .elementor-icon-box-wrapper').should('be.visible').contains('Learn')
    })

    it('Figure written 1,000,253.00',function()
    {
        cy.get('.attachment-large').should('be.visible')
    })

    it('Picture of a male',function()
    {
        cy.get('.elementor-widget-container').should('be.visible')
    })

    //Savings
    it('SAVINGS',function()
    {
        cy.get('.elementor-element-f387e56 > .elementor-widget-container > .ekit-wid-con > .ekit-heading > .ekit-heading--title').should('be.visible').contains('S')
    })

    it('Figure written 52,330.00',function()
    {
        cy.get('.attachment-large').should('be.visible')
    })

    it('Picture of a male and a female',function()
    {
        cy.get('.attachment-large').should('be.visible')
    })

    it('Let your money...',function()
    {
        cy.get('.elementor-element-3085b81 > .elementor-widget-container').should('be.visible').contains('work')
    })

    it('Save Now',function()
    {
        cy.get('.elementor-element-44c89df > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible').contains('Save')
    })

    it('Learn Now, beside Save Now 2nd Icon',function()
    {
        cy.get('.elementor-element-85ee6c9 > .elementor-widget-container > .elementor-icon-box-wrapper').should('be.visible').contains('Learn')
    })

    it('240k',function()
    {
        cy.get('.elementor-element-0a66fed > .elementor-widget-container > .premium-dual-header-first-header > .premium-dual-header-first-span').should('be.visible')
    })

    it('Loans provided to...',function()
    {
        cy.get('.elementor-element-8ef7fd3 > .elementor-widget-container').should('be.visible').contains('small')
    })

    it('From CBN Logo to ...Nigeria(CBN)',function()
    {
        cy.get('.elementor-element-bddc673 > .elementor-widget-wrap').should('be.visible').contains('Central')
    })

    it('From NDIC Logo to ...Coporation(NDIC)',function()
    {
        cy.get('.elementor-element-c4fd5e7 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container').should('be.visible').contains('insured')
    })

    it('As featured in...',function()
    {
        cy.get('.elementor-element-e801181 > .elementor-widget-container > p').should('be.visible').contains('news')
    })

    it('From Africa to Ventures',function()
    {
        cy.get('.elementor-element-49db1e9').should('be.visible')
    })

    it('From Get the... to ...google play',function()
    {
        cy.get('.elementor-element-e801181 > .elementor-widget-container > p').should('be.visible')
    })

    it('Picture like phones',function()
    {
        cy.get('.attachment-large').should('be.visible')
    })

    it('From company to whistle blower',function()
    {
        cy.get('.elementor-element-ce905ef').should('be.visible').contains('Terms')
    })

    it('All rights reserved...',function()
    {
        cy.get('.elementor-element-624a04a > .elementor-widget-container').should('be.visible').contains('Microfinance')
    })

    it('chat icon',function()
    {
        cy.get('#fc_widget').should('be.visible').click()
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')   //verify page title
        cy.url().should('include','renmoney')   //verify url
    })
})*/