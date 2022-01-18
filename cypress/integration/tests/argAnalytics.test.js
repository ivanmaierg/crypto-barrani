/// <reference types="cypress" />

context('Home Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("open the url and show the correct title and nav bar links",()=>{
        // assert url
        cy.url().should("include", "/")
        cy.get('h1').should('have.text','Crypto Barrani').should('be.visible');
        cy.get('.chakra-link > .chakra-text').should('have.text','Arg').should('be.visible').should('be.not.disabled')
        cy.get('.chakra-stack > .chakra-icon > path').should('be.visible').should('be.not.disabled')
    })

    it("should have a chakra heading component",()=>{
        cy.get('.chakra-heading').should('exist').should('have.text,Toda la data que necesitás');
    })
    
})
