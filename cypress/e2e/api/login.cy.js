describe('Login - ServeRest', () => {
  it('Deve fazer login do admin com sucesso', () => {
    cy.fazerLoginApi().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('authorization');
    });
  });

  it('Deve retornar erro com senha inválida', () => {
    cy.request({
      method: 'POST',
      url: '/login',
      failOnStatusCode: false,
      body: {
        email: Cypress.env('EMAIL_CORRECT'),
        password: 'senhaInvalida'
      }
    }).should((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.equal('Email e/ou senha inválidos');
    });
  });
});
