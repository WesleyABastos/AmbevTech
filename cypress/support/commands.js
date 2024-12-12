import 'cypress-file-upload';

Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login');
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="senha"]').type(senha);
  cy.get('[data-testid="entrar"]').click();
}); 