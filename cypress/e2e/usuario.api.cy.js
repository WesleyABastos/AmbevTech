describe('Testes de API ServeRest - Usuário', () => {
  let authorization;
  const usuario = {
    nome: "Wilker",
    email: `wilker.admin${Math.floor(Math.random() * 100000)}@teste.com.br`,
    password: "123456",
    administrador: "true"
  };

  it('Deve cadastrar um novo usuário administrador via API', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: usuario,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal('Cadastro realizado com sucesso');
      expect(response.body).to.have.property('_id');
      
      // Adicionando logs para exibir o ID
      cy.log(`ID do usuário criado: ${response.body._id}`);
      console.log('ID do usuário criado:', response.body._id);
    });
  });

  it('Deve realizar login com o usuário cadastrado', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: usuario.email,
        password: usuario.password
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal('Login realizado com sucesso');
      expect(response.body).to.have.property('authorization');
      authorization = response.body.authorization;
    });
  });
}); 