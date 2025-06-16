Cypress.Commands.add('listarUsuarios', (token) => {
  return cy.request({
    method: 'GET',
    url: '/usuarios',
    headers: { Authorization: token }
  });
});

Cypress.Commands.add('criarUsuario', (usuario) => {
  return cy.request({
    method: 'POST',
    url: '/usuarios',
    body: usuario
  });
});
