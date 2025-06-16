describe('Carrinhos - ServeRest', () => {
    let token;
    let idProduto;

    before(() => {
        cy.fazerLoginApi().then((response) => {
            token = response.body.authorization;
        });
    });

    beforeEach(() => {
        // Cria um produto com quantidade 10 antes de cada teste
        cy.criarProdutoValido(token, 10).then((_id) => {
            idProduto = _id;
        });
    });

    it('Deve criar um carrinho com produto recém criado', () => {
        cy.criarCarrinho(token, idProduto)
            .should((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.include('Cadastro realizado com sucesso');
            });
    });

    it('Deve excluir o carrinho', () => {
        cy.excluirCarrinho(token).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.match(/Registro excluído com sucesso/);
        });
    });
});
