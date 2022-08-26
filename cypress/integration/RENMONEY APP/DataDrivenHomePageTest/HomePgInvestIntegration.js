import renmoney from "C:/Users/Fortune/Desktop/SoftwareTesting/CypressThings/cypress/fixtures/renmoney.json"

describe('Home Page Invest Now Icons- Integration Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit(renmoney.url)
        cy.url().should('include',renmoney.renmoney)   //verify url
        cy.title().should('eq',renmoney.verifytitle)  //verify page title.
    })

    it('Invest- Text Icon',function()     //generallly the app is not stable for automaton. the selsctors change at random.
    {
        cy.get('.elementor-element-7764d26 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text').should('be.visible').contains('Invest').click()
        cy.title().should('eq','Renmoney Fixed Deposits | Start online today')
        cy.url().should('include','deposits')

        cy.get(renmoney.body).should('be.visible').contains('Earn')

        cy.go(-1)
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.renmoney)   //verify url
    })

    it('Invest Now Icon',function()
    {
        cy.get('.hero_content > :nth-child(4)').should('be.visible').contains('Invest Now').click()
        cy.title().should('eq',renmoney.investtitle)
        cy.url().should('include',renmoney.deposits)

        cy.get(renmoney.body).should('be.visible').contains('more')

        //From 'We use cookies...' to 'OK!'
        cy.get('.cc-window').should('be.visible').contains('OK')
        
        cy.go('back')
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.renmoney)   //verify url
    })
        
    it('Invest Now 2nd Icon',function()
    {
        cy.get('.product-right > .container > .products-wrapper > .pl-80 > .register-button').should('be.visible').contains('Invest Now').click()
        cy.title().should('eq',renmoney.Renmoney)
        cy.url().should('include',renmoney.register)

        cy.get('body').should('be.visible').contains('get')

        cy.go('back')
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.renmoney)   //verify url
    })

    it('Learn More- Beside Invest Now 2nd Icon',function()
    {
        cy.get('.product-right > .container > .products-wrapper > .pl-80 > .p-link > .large-link').should('be.visible').contains('Learn').click()
        cy.title().should('eq',renmoney.investtitle)
        cy.url().should('include',renmoney.deposits)

        //From 'We use cookies...' to 'OK!'
        cy.get('.cc-window').should('be.visible').contains('OK')

        cy.get(renmoney.body).should('be.visible').contains('yield')
        
        cy.go(-1)
        cy.title().should('eq',renmoney.verifytitle)
        cy.url().should('include',renmoney.renmoney)   //verify url
    })
})




















/*describe('Home Page Invest Now Icons- Integration Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title.
    })

    it('Invest- Text Icon',function()
    {
        cy.get('.hero_content > ._2 > a > .span1').should('be.visible').contains('Invest').click()
        cy.title().should('eq','Renmoney Fixed Deposits | Start online today')
        cy.url().should('include','deposits')

        cy.get('body').should('be.visible').contains('OK')
        
        //From 'We use cookies...' to 'OK!'
        cy.get('.cc-window').should('be.visible').contains('OK')
        
        //Earn More on...
        cy.get('.elementor-element-a6a8c03 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > p').should('be.visible').contains('Fixed')
        
        //How much do...
        cy.get('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-shortcode > deposit-calculator > app-deposit-calculator > #__ren_deposit_widget > :nth-child(1) > :nth-child(1) > .card-body > .pb-4 > .align-items-center > .text-dark-grey').should('be.visible').contains('want')
        
        //For how long...
        cy.get('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-shortcode > deposit-calculator > app-deposit-calculator > #__ren_deposit_widget > :nth-child(1) > :nth-child(1) > .card-body > .pb-4 > :nth-child(4)').should('be.visible').contains('long')

        //Group of Elements from 'how much...' to 'create a...'
        cy.get('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container').should('be.visible')
        
        //Group of Elements from 'how much...' to 'create a...' including open space
        cy.get('.elementor-element-9e5bfc4').should('be.visible').contains('Total')

        //Pictures
        cy.get('.elementor-element-456bb7b > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .attachment-large').should('be.visible')

        //from 'Why our...' to 'Let you...'
        cy.get('.elementor-element-c443c3d > .elementor-widget-wrap').should('be.visible').contains('our')

        //'High' to 'Insured' 
        cy.get('.elementor-element-afc94eb > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-list-items').should('be.visible').contains('interest')
        
        //'Regulated' to 'simple'
        cy.get('.elementor-element-58fefc2 > .elementor-widget-wrap').should('be.visible').contains('CBN')

        //How it works
        cy.get('.elementor-element-5c19beb > .elementor-widget-container > .elementor-heading-title').should('be.visible').contains('works')
       
        //From 'How it'... to 'your money'
        cy.get('.elementor-element-bef63f3 > :nth-child(1) > .elementor-col-100 > :nth-child(1)').should('be.visible').contains('details')
    
        //'Ready to...' to 'Invest now'
        cy.get('.elementor-element-1752bed').should('be.visible').contains('today')

        //'Frequently asked...' to '...with Renmoney?' 
        cy.get('.elementor-element-9a9bf79 > :nth-child(1) > .elementor-top-column > :nth-child(1)').should('be.visible').contains('liquidate')

        //From 'Get the...' to 'google play'
        cy.get('.elementor-element-91fa785 > .elementor-widget-wrap').should('be.visible').contains('app')
        
        //Picture
        cy.get('.attachment-large').should('be.visible')
        
        //From 'company' to 'whistle blower'
        cy.get('.elementor-element-ce905ef').should('be.visible').contains('Terms')

        //All rights reserved...
        cy.get('.elementor-element-624a04a > .elementor-widget-container').should('be.visible').contains('Microfinance')
       
        //chat icon
        cy.get('#fc_widget').should('be.visible')


       
        cy.go(-1)
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')
        cy.url().should('include','renmoney')   //verify url
    })

    it('Invest Now Icon',function()
    {
        cy.get('.elementor-element-7764d26 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible').contains('Invest Now').click()
        cy.title().should('eq','Renmoney Fixed Deposits | Start online today')
        cy.url().should('include','deposits')

        //From 'We use cookies...' to 'OK!'
        cy.get('.cc-window').should('be.visible').contains('OK')
        
        //Earn More on...
        cy.get('.elementor-element-a6a8c03 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > p').should('be.visible').contains('Fixed')
        
        //How much do...
        cy.get('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-shortcode > deposit-calculator > app-deposit-calculator > #__ren_deposit_widget > :nth-child(1) > :nth-child(1) > .card-body > .pb-4 > .align-items-center > .text-dark-grey').should('be.visible').contains('want')
        
        //For how long...
        cy.get('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-shortcode > deposit-calculator > app-deposit-calculator > #__ren_deposit_widget > :nth-child(1) > :nth-child(1) > .card-body > .pb-4 > :nth-child(4)').should('be.visible').contains('long')

        //Group of Elements from 'how much...' to 'create a...'
        cy.get('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container').should('be.visible')
        
        //Group of Elements from 'how much...' to 'create a...' including open space
        cy.get('.elementor-element-9e5bfc4').should('be.visible').contains('Total')

        //Pictures
        cy.get('.elementor-element-456bb7b > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .attachment-large').should('be.visible')

        //from 'Why our...' to 'Let you...'
        cy.get('.elementor-element-c443c3d > .elementor-widget-wrap').should('be.visible').contains('our')

        //'High' to 'Insured' 
        cy.get('.elementor-element-afc94eb > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-list-items').should('be.visible').contains('interest')
        
        //'Regulated' to 'simple'
        cy.get('.elementor-element-58fefc2 > .elementor-widget-wrap').should('be.visible').contains('CBN')

        //How it works
        cy.get('.elementor-element-5c19beb > .elementor-widget-container > .elementor-heading-title').should('be.visible').contains('works')
       
        //From 'How it'... to 'your money'
        cy.get('.elementor-element-bef63f3 > :nth-child(1) > .elementor-col-100 > :nth-child(1)').should('be.visible').contains('details')
    
        //'Ready to...' to 'Invest now'
        cy.get('.elementor-element-1752bed').should('be.visible').contains('today')

        //'Frequently asked...' to '...with Renmoney?' 
        cy.get('.elementor-element-9a9bf79 > :nth-child(1) > .elementor-top-column > :nth-child(1)').should('be.visible').contains('liquidate')

        //From 'Get the...' to 'google play'
        cy.get('.elementor-element-91fa785 > .elementor-widget-wrap').should('be.visible').contains('app')
        
        //Picture
        cy.get('.attachment-large').should('be.visible')
        
        //From 'company' to 'whistle blower'
        cy.get('.elementor-element-ce905ef').should('be.visible').contains('Terms')

        //All rights reserved...
        cy.get('.elementor-element-624a04a > .elementor-widget-container').should('be.visible').contains('Microfinance')
       
        //chat icon
        cy.get('#fc_widget').should('be.visible')

        //Frequently asked questions Drop Downs
        cy.get('#uc_uc_icon_accordion_elementor15230_item1 > #uc_uc_icon_accordion_elementor15230 > .ue_title').should('be.visible').contains('increase').click()
        cy.get('#uc_uc_icon_accordion_elementor15230_item1 > .ue_content').should('be.visible').contains('Yes, you can.')   //element inside the drop down
        
        cy.get('#uc_uc_icon_accordion_elementor15230_item2 > #uc_uc_icon_accordion_elementor15230 > .ue_title').should('be.visible').contains('liquidate').click()
        cy.get('#uc_uc_icon_accordion_elementor15230_item2 > .ue_content > p').should('be.visible').contains('Yes, you can. Depending')   //element inside the drop down

        cy.get('#uc_uc_icon_accordion_elementor15230_item3 > #uc_uc_icon_accordion_elementor15230 > .ue_title').should('be.visible').contains('enquiry').click()
        cy.get('#uc_uc_icon_accordion_elementor15230_item3 > .ue_content').should('be.visible').contains('Please send an email')

        cy.get('#uc_uc_icon_accordion_elementor15230_item4 > #uc_uc_icon_accordion_elementor15230 > .ue_title').should('be.visible').contains('safe').click()
        cy.get('#uc_uc_icon_accordion_elementor15230_item4 > .ue_content').should('be.visible').contains('Your investment is safe with Renmoney.')

        cy.go('back')
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')
        cy.url().should('include','renmoney')   //verify url
    })
        
    it('Invest Now 2nd Icon',function()
    {
        cy.get('.elementor-element-e43031f > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible').contains('Invest Now').click()
        cy.title().should('eq','Renmoney')
        cy.url().should('include','login-email')

        //From 'renmoney...' to 'Login'
        cy.get('.nav').should('be.visible').contains('Us')

        //From 'Let's get...' to 'Get started'
        cy.get('.d-flex').should('be.visible').contains('you')

        cy.go('back')
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')
        cy.url().should('include','renmoney')   //verify url
    })

    it('Learn More- Beside Invest Now 2nd Icon',function()
    {
        cy.get('.elementor-element-b1c803b > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title > a').should('be.visible').contains('Learn').click()
        cy.title().should('eq','Renmoney Fixed Deposits | Start online today')
        cy.url().should('include','deposits')

        //From 'We use cookies...' to 'OK!'
        cy.get('.cc-window').should('be.visible').contains('OK')
        
        //Earn More on...
        cy.get('.elementor-element-a6a8c03 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > p').should('be.visible').contains('Fixed')
        
        //How much do...
        cy.get('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-shortcode > deposit-calculator > app-deposit-calculator > #__ren_deposit_widget > :nth-child(1) > :nth-child(1) > .card-body > .pb-4 > .align-items-center > .text-dark-grey').should('be.visible').contains('want')
        
        //For how long...
        cy.get('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-shortcode > deposit-calculator > app-deposit-calculator > #__ren_deposit_widget > :nth-child(1) > :nth-child(1) > .card-body > .pb-4 > :nth-child(4)').should('be.visible').contains('long')

        //Group of Elements from 'how much...' to 'create a...'
        cy.get('.elementor-element-9e5bfc4 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container').should('be.visible')
        
        //Group of Elements from 'how much...' to 'create a...' including open space
        cy.get('.elementor-element-9e5bfc4').should('be.visible').contains('Total')

        //Pictures
        cy.get('.elementor-element-456bb7b > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .attachment-large').should('be.visible')

        //from 'Why our...' to 'Let you...'
        cy.get('.elementor-element-c443c3d > .elementor-widget-wrap').should('be.visible').contains('our')

        //'High' to 'Insured' 
        cy.get('.elementor-element-afc94eb > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-icon-list-items').should('be.visible').contains('interest')
        
        //'Regulated' to 'simple'
        cy.get('.elementor-element-58fefc2 > .elementor-widget-wrap').should('be.visible').contains('CBN')

        //How it works
        cy.get('.elementor-element-5c19beb > .elementor-widget-container > .elementor-heading-title').should('be.visible').contains('works')
       
        //From 'How it'... to 'your money'
        cy.get('.elementor-element-bef63f3 > :nth-child(1) > .elementor-col-100 > :nth-child(1)').should('be.visible').contains('details')
    
        //'Ready to...' to 'Invest now'
        cy.get('.elementor-element-1752bed').should('be.visible').contains('today')

        //'Frequently asked...' to '...with Renmoney?' 
        cy.get('.elementor-element-9a9bf79 > :nth-child(1) > .elementor-top-column > :nth-child(1)').should('be.visible').contains('liquidate')

        //From 'Get the...' to 'google play'
        cy.get('.elementor-element-91fa785 > .elementor-widget-wrap').should('be.visible').contains('app')
        
        //Picture
        cy.get('.attachment-large').should('be.visible')
        
        //From 'company' to 'whistle blower'
        cy.get('.elementor-element-ce905ef').should('be.visible').contains('Terms')

        //All rights reserved...
        cy.get('.elementor-element-624a04a > .elementor-widget-container').should('be.visible').contains('Microfinance')
       
        //chat icon
        cy.get('#fc_widget').should('be.visible')

         //Frequently asked questions Drop Downs
         cy.get('#uc_uc_icon_accordion_elementor15230_item1 > #uc_uc_icon_accordion_elementor15230 > .ue_title').should('be.visible').contains('increase').click()
         cy.get('#uc_uc_icon_accordion_elementor15230_item1 > .ue_content').contains('Yes, you can.')   //element inside the drop down
         
         cy.get('#uc_uc_icon_accordion_elementor15230_item2 > #uc_uc_icon_accordion_elementor15230 > .ue_title').should('be.visible').contains('liquidate').click()
         cy.get('#uc_uc_icon_accordion_elementor15230_item2 > .ue_content > p').should('be.visible').contains('Yes, you can. Depending')   //element inside the drop down
 
         cy.get('#uc_uc_icon_accordion_elementor15230_item3 > #uc_uc_icon_accordion_elementor15230 > .ue_title').should('be.visible').contains('enquiry').click()
         cy.get('#uc_uc_icon_accordion_elementor15230_item3 > .ue_content').should('be.visible').contains('Please send an email')
 
         cy.get('#uc_uc_icon_accordion_elementor15230_item4 > #uc_uc_icon_accordion_elementor15230 > .ue_title').should('be.visible').contains('safe').click()
         cy.get('#uc_uc_icon_accordion_elementor15230_item4 > .ue_content').should('be.visible').contains('Your investment is safe with Renmoney.')
        
        cy.go(-1)
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')
        cy.url().should('include','renmoney')   //verify url
    })
})*/