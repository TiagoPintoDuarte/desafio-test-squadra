describe('Feature Login', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/')
    })

    it("Login com sucesso", function () {
        cy.realizarLogin({
            email: Cypress.env('EMAIL_CORRECT'),
            senha: Cypress.env('PASSWORD')
        })
        cy.pause()
        cy.contains('p', 'Este é seu sistema para administrar seu ecommerce.').should('be.visible')
    })

    it("Login Invalido ", function () {
         cy.realizarLogin({
            email: Cypress.env('EMAIL_CORRECT'),
            senha: Cypress.env('PASSWORD_INVALID')
        })
        cy.get('body').should('not.contain.text', 'Este é seu sistema para administrar seu ecommerce.')
        cy.get('.alert').should('contain.text', 'Email e/ou senha inválidos')
    })

})