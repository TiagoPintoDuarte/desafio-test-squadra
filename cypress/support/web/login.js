Cypress.Commands.add('realizarLogin', (dadosLogin) => {
    if (dadosLogin.email) {
        cy.get('[data-testid="email"]').type(dadosLogin.email)
    }
    if (dadosLogin.senha) {
        cy.get('[data-testid="senha"]').type(dadosLogin.senha)
    }
    cy.get('[data-testid="entrar"]').click()

})