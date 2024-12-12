describe('Testes de API ServeRest - Produtos', () => {
  let authorization;
  const usuario = {
    nome: "Wilker",
    email: `wilker.admin${Math.floor(Math.random() * 100000)}@teste.com.br`,
    password: "123456",
    administrador: "true"
  };

  let produtoAleatorio;

  before(() => {
    // Carrega e seleciona um produto aleatório do arquivo de fixture
    cy.fixture('produtosApi').then((produtos) => {
      produtoAleatorio = produtos[Math.floor(Math.random() * produtos.length)];
      // Adiciona um timestamp ao nome do produto para torná-lo único
      produtoAleatorio.nome = `${produtoAleatorio.nome} - ${Date.now()}`;
    });

    // Primeiro cadastrar o usuário
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: usuario,
      failOnStatusCode: false
    });

    // Depois realizar login para obter o token
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: usuario.email,
        password: usuario.password
      }
    }).then((response) => {
      authorization = response.body.authorization;
    });
  });

  it('Deve cadastrar um novo produto usando o token de autorização', () => {
    cy.wrap(produtoAleatorio).then((produto) => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: {
          Authorization: authorization
        },
        body: {
          nome: produto.nome,
          preco: parseInt(produto.preco),
          descricao: produto.descricao,
          quantidade: parseInt(produto.quantidade)
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('Cadastro realizado com sucesso');
        expect(response.body).to.have.property('_id');
        
        // Adicionando console.log para mostrar o ID
        cy.log(`ID do produto criado: ${response.body._id}`);
        console.log('ID do produto criado:', response.body._id);
      });
    });
  });
}); 