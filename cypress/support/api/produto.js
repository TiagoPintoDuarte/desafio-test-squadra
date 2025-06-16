Cypress.Commands.add('listarProdutos', () => {
  return cy.request({
    method: 'GET',
    url: '/produtos'
  });
});

Cypress.Commands.add('criarProduto', (produto, token) => {
  return cy.request({
    method: 'POST',
    url: '/produtos',
    headers: { Authorization: token },
    body: produto
  });
});
