describe('Home Page: Apply Icons- Integration Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title.
    })

    it('Apply Now Icon',function()
    {
        cy.get('.hero_content > ._22').should('be.visible').contains('Apply Now').click()
        cy.title().should('eq','Renmoney')  //verify page title
        //cy.url().should('include','loan')  //verify url. not stable. passes at a run and fails at a re-run

        cy.get('body').should('be.visible').contains('convenient')
        
        cy.go(-1)
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')    //verify page title
        cy.url().should('include','renmoney')   //verify url
    })

    it('Apply Now 2nd Icon',function()
    {
        cy.get(':nth-child(1) > .container > .products-wrapper > .pl-80 > .register-button > div').should('be.visible').contains('Apply Now').click()
        cy.title().should('eq','Renmoney')     //verify page title
        //cy.url().should('include','loan')   //verify url. not stable. passes at a run and fails at a re-run

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
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')
        cy.url().should('include','renmoney')   //verify url
    })

    it('Learn More Apply Now 2nd Icon',function()
    {
        cy.get(':nth-child(1) > .container > .products-wrapper > .pl-80 > .p-link > .large-link').should('be.visible').click()
        cy.title().should('eq','Convenient Personal & Micro-business Loans')
        cy.url().should('include','loans')

       //coockies
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
        cy.get(':nth-child(5) > .answer > .answer-text').should('be.visible').contains('debt')

        cy.get('body').should('be.visible').contains('needs')

        cy.go(-1)
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')
        cy.url().should('include','renmoney')   //verify url
    })
})
























/*describe('Home Page: Apply Icons- Integration Testing',function()
{
    it('Visit URL',function()
    {
        cy.visit('https://www.renmoney.com/')
        cy.url().should('include','renmoney')   //verify url
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')  //verify page title.
    })

    it('Apply Now Icon',function()
    {
        cy.get('.hero_content > ._22').should('be.visible').contains('Apply Now').click()
        cy.title().should('eq','Renmoney')
        cy.url().should('include','login')

        //From 'renmoney' to 'Get started'
        cy.get('.nav').should('be.visible').contains('Loans')

        //From 'Borrow'... to 'Get started'
        cy.get('.hero').should('be.visible').contains('place')

        //From 'Apply for a...' to '...loan is approved'
        cy.get('.workings').should('be.visible').contains('tenure')
        
        //From 'frequently...' to '...repayment?'
        cy.get('.faqs').should('be.visible').contains('eligible')

        //From 'representative...' to chat icon'
        cy.get('.footer') .should('be.visible').contains('tenure')

        //Frequently asked questions(Drop Downs)
        cy.get(':nth-child(1) > .accordion-item-header').should('be.visible').contains('eligible').click({force:true})
        cy.get(':nth-child(1) > .accordion-item-body > .accordion-item-body-content').should('be.visible').contains('To qualify')

        cy.get(':nth-child(2) > .accordion-item-header').should('be.visible').contains('much').click({force:true})
        cy.get(':nth-child(2) > .accordion-item-body > .accordion-item-body-content').should('be.visible').contains('You can get')

        cy.get(':nth-child(3) > .accordion-item-header').should('be.visible').contains('Document').click()
        cy.get(':nth-child(3) > .accordion-item-body > .accordion-item-body-content').should('be.visible').contains('You need your')

        cy.get(':nth-child(4) > .accordion-item-header').should('be.visible').contains('repayment').click()
        cy.get(':nth-child(4) > .accordion-item-body > .accordion-item-body-content').should('be.visible').contains('If you')
        
        cy.go(-1)
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')
        cy.url().should('include','renmoney')   //verify url
    })

    it('Apply Now 2nd Icon',function()
    {
        cy.get('.elementor-element-849b2da > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').should('be.visible').contains('Apply Now').click()
        cy.title().should('eq','Renmoney')
        cy.url().should('include','login')

        //From 'renmoney' to 'Get started'
        cy.get('.nav').should('be.visible').contains('Loans')

        //From 'Borrow'... to 'Get started'
        cy.get('.hero').should('be.visible').contains('place')

        //From 'Apply for a...' to '...loan is approved'
        cy.get('.workings').should('be.visible').contains('tenure')
        
        //From 'frequently...' to '...repayment?'
        cy.get('.faqs').should('be.visible').contains('eligible')

        //From 'representative...' to chat icon'
        cy.get('.footer') .should('be.visible').contains('tenure')

        //Frequently asked questions(Drop Downs)
        cy.get(':nth-child(1) > .accordion-item-header').should('be.visible').contains('eligible').click({force:true})
        cy.get(':nth-child(1) > .accordion-item-body > .accordion-item-body-content').should('be.visible').contains('To qualify')

        cy.get(':nth-child(2) > .accordion-item-header').should('be.visible').contains('much').click({force:true})
        cy.get(':nth-child(2) > .accordion-item-body > .accordion-item-body-content').should('be.visible').contains('You can get')

        cy.get(':nth-child(3) > .accordion-item-header').should('be.visible').contains('Document').click()
        cy.get(':nth-child(3) > .accordion-item-body > .accordion-item-body-content').should('be.visible').contains('You need your')

        cy.get(':nth-child(4) > .accordion-item-header').should('be.visible').contains('repayment').click()
        cy.get(':nth-child(4) > .accordion-item-body > .accordion-item-body-content').should('be.visible').contains('If you')
        
        cy.go(-1)
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')
        cy.url().should('include','renmoney')   //verify url
    })

    it('Learn More Apply Now 2nd Icon',function()
    {
        cy.get('.elementor-element-f202cc6 > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-title').should('be.visible').click()
        cy.title().should('eq','Convenient Personal & Business Loans')
        cy.url().should('include','loans')

       //coockies
        cy.get('.cc-window').should('be.visible').contains('experience')
        cy.get('.cc-btn').should('be.visible').contains('OK!').click()
        
        //renmoney logo and the menu botton
        cy.get('.elementor-element-4fd7b29').should('be.visible')

        //'get a loan...' to 'apply now'
        cy.get('.elementor-element-33a48e0 > .elementor-widget-wrap').should('be.visible').contains('meet')

        //pictures like phones
        cy.get('.elementor-element-b32c4fa > :nth-child(1)').should('be.visible')

        //pictures
        cy.get('.elementor-element-d63cb4e > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .attachment-large').should('be.visible')
        
        //from 'focus on the...' to '...in 24 hours
        cy.get('.elementor-element-d6a0e98 > .elementor-widget-wrap') .should('be.visible').contains('convenient')

        //from 'how it works...' to '...is approved'
        cy.get('.elementor-element-7f4fb5e > :nth-child(1) > .elementor-col-100 > :nth-child(1)').should('be.visible').contains('Verify')

        //need money...
        cy.get('.elementor-element-1752bed').should('be.visible').contains('now')
        
        //'frequently asked..' to '...applied for'
        cy.get('.elementor-element-1752bed').should('be.visible')

        //from 'get the..' to the chat icon
        cy.get('.elementor-element-3b1f75e5').should('be.visible').contains('Download')

        //Frequently asked questions drop downs
        cy.get('#uc_uc_icon_accordion_elementor23003_item1 > #uc_uc_icon_accordion_elementor23003').should('be.visible').contains('eligible').click()
        cy.get('#uc_uc_icon_accordion_elementor23003_item1 > .ue_content > p').should('be.visible').contains('To qualify')
        
        cy.get('#uc_uc_icon_accordion_elementor23003_item2 > #uc_uc_icon_accordion_elementor23003').should('be.visible').contains('much').click()
        cy.get('#uc_uc_icon_accordion_elementor23003_item2 > .ue_content').should('be.visible').contains('six')
        
        cy.get('#uc_uc_icon_accordion_elementor23003_item3 > #uc_uc_icon_accordion_elementor23003').should('be.visible').contains('document').click()
        cy.get('#uc_uc_icon_accordion_elementor23003_item3 > .ue_content').should('be.visible').contains('utility')
        
        cy.get('#uc_uc_icon_accordion_elementor23003_item4 > #uc_uc_icon_accordion_elementor23003').should('be.visible').contains('BVN').click()
        cy.get('#uc_uc_icon_accordion_elementor23003_item4 > .ue_content > p').should('be.visible').contains('CBN')
        
        cy.get('#uc_uc_icon_accordion_elementor23003_item5 > #uc_uc_icon_accordion_elementor23003').should('be.visible').contains('offer').click()
        cy.get('#uc_uc_icon_accordion_elementor23003_item5 > .ue_content').should('be.visible').contains('debt')

        cy.go(-1)
        cy.title().should('eq','Renmoney | Loans | Savings | Deposits')
        cy.url().should('include','renmoney')   //verify url
    })
})*/
