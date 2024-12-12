import { loginElements } from '../elements/loginElements';

class LoginPage {
  acessarPagina() {
    cy.visit('https://front.serverest.dev/login');
  }

  fazerLogin(email, senha) {
    cy.get(loginElements.emailInput).type(email);
    cy.get(loginElements.passwordInput).type(senha);
    cy.get(loginElements.loginButton).click();
  }

  clicarCadastrar() {
    cy.get(loginElements.cadastrarLink).click();
  }
}

export default new LoginPage(); 