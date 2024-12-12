import LoginPage from '../pages/LoginPage';
import CadastroPage from '../pages/CadastroPage';

describe('Cadastro de Usuários', () => {
  
  let adminCriado; // Variável para armazenar dados do admin criado inicialmente


  it('Deve realizar cadastro inicial do primeiro administrador', () => {
    // Gera dados aleatórios para o admin
    adminCriado = CadastroPage.gerarDadosUsuario('Admin');
    cy.visit('/');
    LoginPage.clicarCadastrar();
    // Preenche formulário com dados do admin
    CadastroPage.preencherDados(adminCriado.nome, adminCriado.email, adminCriado.senha);
    CadastroPage.selecionarAdmin(); // administrador
    CadastroPage.clicarCadastrar(); 
    // Valida mensagem de boas-vindas com nome do admin
    CadastroPage.validarMensagemBoasVindas(adminCriado.nome);
  });

 
  it('Deve cadastrar um novo usuário comum com sucesso', () => {
    // Gera dados aleatórios para usuário comum
    const novoUsuario = CadastroPage.gerarDadosUsuario();

    cy.login(adminCriado.email, adminCriado.senha); // Login como admin
    CadastroPage.acessarTelaCadastroUsuarios();
    CadastroPage.preencherDados(novoUsuario.nome, novoUsuario.email, novoUsuario.senha); //dados do usuario
    CadastroPage.clicarCadastrar();
    // Valida se usuário foi cadastrado na lista de usuarios
    CadastroPage.validarCadastroUsuario(novoUsuario.nome, novoUsuario.email, novoUsuario.senha);
  });

  it('Deve cadastrar um novo administrador através da tela de admin', () => {
    // Gera dados aleatórios para novo admin
    const novoAdmin = CadastroPage.gerarDadosUsuario('Admin');

    cy.login(adminCriado.email, adminCriado.senha); // Login como admin
    CadastroPage.acessarTelaCadastroUsuarios(); 
    // Preenche dados do novo admin
    CadastroPage.preencherDados(novoAdmin.nome, novoAdmin.email, novoAdmin.senha);
    CadastroPage.selecionarAdmin(); // administrador
    CadastroPage.clicarCadastrar();
    // Valida se admin foi cadastrado corretamente
    CadastroPage.validarCadastroUsuario(novoAdmin.nome, novoAdmin.email, novoAdmin.senha, true);
  });
}); 