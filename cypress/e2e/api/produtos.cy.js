import { faker } from '@faker-js/faker';

describe('Produtos - ServeRest', () => {
  let token;

  before(() => {
    cy.fazerLoginApi().then((response) => {
      token = response.body.authorization;
    });
  });

  it('Deve listar os produtos', () => {
    cy.listarProdutos().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('produtos');
    });
  });

  it('Deve cadastrar um novo produto', () => {
    const produto = {
      nome: faker.commerce.productName(),
      preco: faker.number.int({ min: 1, max: 500 }),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 99 })
    };
    cy.criarProduto(produto, token).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.include('Cadastro realizado com sucesso');
    });
  });
});
