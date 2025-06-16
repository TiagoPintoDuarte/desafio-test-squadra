Cypress.Commands.add('fazerLoginApi', () => {
  return cy.request({
    method: 'POST',
    url: '/login',
    body: {
      email: Cypress.env('EMAIL_CORRECT'),
      password: Cypress.env('PASSWORD')
    }
  });
});
