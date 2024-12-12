import { cadastroElements } from '../elements/cadastroElements';

class CadastroPage {
  gerarDadosUsuario(tipo = 'Usuario') {
    return {
      nome: `${tipo}${Math.floor(Math.random() * 10000)}`,
      email: `${tipo.toLowerCase()}${Math.floor(Math.random() * 10000)}@teste.com`,
      senha: '123456'
    };
  }

  criarUsuarioViaAPI(dadosUsuario) {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: dadosUsuario.nome,
        email: dadosUsuario.email,
        password: dadosUsuario.senha,
        administrador: 'true'
      }
    });
  }

  preencherDados(nome, email, senha) {
    cy.get(cadastroElements.nomeInput, { timeout: 10000 }).type(nome);
    cy.get(cadastroElements.emailInput, { timeout: 10000 }).type(email);
    cy.get(cadastroElements.passwordInput, { timeout: 10000 }).type(senha);
  }

  selecionarAdmin() {
    cy.get(cadastroElements.adminCheckbox).check();
  }

  clicarCadastrar() {
    cy.contains('button', 'Cadastrar').click();
  }

  acessarTelaCadastroUsuarios() {
    cy.get('[data-testid="cadastrar-usuarios"]').click();
  }

  validarCadastroUsuario(nome, email, senha, isAdmin = false) {
    cy.get('tbody tr').contains('td', nome).parent().within(() => {
      cy.get('td').eq(0).should('contain', nome);
      cy.get('td').eq(1).should('contain', email);
      cy.get('td').eq(2).should('contain', senha);
      cy.get('td').eq(3).should('contain', isAdmin.toString());
    });
  }

  validarMensagemBoasVindas(nome) {
    cy.contains(`Bem Vindo ${nome}`);
  }
}

export default new CadastroPage();