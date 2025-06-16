import { faker } from '@faker-js/faker';

describe('Usuários - ServeRest', () => {
  let token;

  before(() => {
    cy.fazerLoginApi().then((response) => {
      token = response.body.authorization;
    });
  });

  it('Deve listar os usuários cadastrados', () => {
    cy.listarUsuarios(token).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('usuarios');
    });
  });

  it('Deve cadastrar um novo usuário', () => {
    const usuario = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      administrador: 'true'
    };
    cy.criarUsuario(usuario).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.include('Cadastro realizado com sucesso');
    });
  });
});
