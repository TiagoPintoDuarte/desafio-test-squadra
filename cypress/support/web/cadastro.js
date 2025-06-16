Cypress.Commands.add('realizarCadastro', (dadosCadastro) => {
    cy.get('[data-testid="cadastrar"]').click()
    if (dadosCadastro.nome) {
        cy.get('[data-testid="nome"]').type(dadosCadastro.nome)
    }
    if (dadosCadastro.email) {
        cy.get('[data-testid="email"]').type(dadosCadastro.email)
    }
    if (dadosCadastro.password) {
        cy.get('[data-testid="password"]').type(dadosCadastro.password)
    }
    cy.get('[data-testid="cadastrar"]').click()

})