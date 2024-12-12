// Importação das classes de páginas necessárias
import LoginPage from '../pages/LoginPage';
import ProdutoPage from '../pages/ProdutoPage';
import CadastroPage from '../pages/CadastroPage';


describe('Cadastro de Produtos', () => {
  // Gera dados aleatórios para um usuário admin
  const adminData = CadastroPage.gerarDadosUsuario('Admin');

  // Configuração antes de cada teste
  beforeEach(() => {
    // Cria um usuário admin via API
    CadastroPage.criarUsuarioViaAPI(adminData).then(() => {
      cy.login(adminData.email, adminData.senha); // login como admin
      cy.get('[data-testid="cadastrar-produtos"]').should('be.visible');
    });
  });

  it('Deve cadastrar um novo produto com sucesso e validar a lista de produtos', () => {
    cy.fixture('produtos.json').then((produtos) => {
      const produtoAleatorio = produtos[Math.floor(Math.random() * produtos.length)];
      const idAleatorio = Math.floor(Math.random() * 500) + 1;
      produtoAleatorio.nome += ` ${idAleatorio}`;

      cy.get('[data-testid="cadastrar-produtos"]').click();
      cy.url().should('include', '/admin/cadastrarprodutos');
      
      ProdutoPage.dadosProduto(produtoAleatorio);
      ProdutoPage.carregarImagem(produtoAleatorio.imagem);
      ProdutoPage.clicarCadastrar();
      
      ProdutoPage.validacaoCadastro(produtoAleatorio);
      
      cy.get('[data-testid="logout"]').click();
    });
  });
}); 