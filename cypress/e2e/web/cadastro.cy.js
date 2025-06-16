import { faker } from "@faker-js/faker"

describe('Feature Cadastro', () => {

    beforeEach(() => {
        cy.visit('https://front.serverest.dev/')
        cy.fixture("usuario").as('usuario')
    })

    it("Cadastro com sucesso", function () {
        this.usuario.cadastroCompleto.email = faker.internet.email() 
        cy.realizarCadastro(this.usuario.cadastroCompleto)
        cy.get('.alert').should('contain.text', 'Cadastro realizado com sucesso')
    })

    it("Validar obrigatoriedade do Nome ", function () {
        cy.realizarCadastro(this.usuario.cadastroSemNome)
        cy.get('.alert').should('contain.text', 'Nome é obrigatório')
    })

    it("Validar obrigatoriedade do password", function () {
        cy.realizarCadastro(this.usuario.cadastroSemPassword)
        cy.get('.alert').should('contain.text', 'Password é obrigatório')
    })

    it("Validar obrigatoriedade do Email", function () {
        cy.realizarCadastro(this.usuario.cadastroSemEmail)
        cy.get('.alert').should('contain.text', 'Email é obrigatório')
    })

})