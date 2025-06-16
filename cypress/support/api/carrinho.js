import { faker } from '@faker-js/faker';

Cypress.Commands.add('criarCarrinho', (token, idProduto) => {
    return cy.request({
        method: 'POST',
        url: '/carrinhos',
        headers: { Authorization: token },
        body: {
            produtos: [
                { idProduto, quantidade: 1 }
            ]
        }
    })
});

Cypress.Commands.add('criarProdutoValido', (token, quantidade = 10) => {
    const produto = {
        nome: faker.commerce.productName() + '_' + Date.now(),
        preco: quantidade,
        descricao: faker.commerce.productDescription(),
        quantidade: quantidade
    };
    return cy.request({
        method: 'POST',
        url: '/produtos',
        headers: { Authorization: token },
        body: produto
    }).then((res) => res.body._id);
});

Cypress.Commands.add('excluirCarrinho', (token) => {
    return cy.request({
        method: 'DELETE',
        url: 'https://serverest.dev/carrinhos/cancelar-compra',
        headers: { Authorization: token }
    });
});
