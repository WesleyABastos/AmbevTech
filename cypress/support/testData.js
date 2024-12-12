// Função para gerar dados aleatórios
const gerarDadosAleatorios = () => {
  const timestamp = new Date().getTime();
  return {
    nome: `Alex${timestamp}`,
    email: `alex.admin${timestamp}@adm.com`,
    senha: `senha${timestamp}`
  };
};

// Dados para novo cadastro de admin
export const adminData = (() => {
  const dadosAdmin = gerarDadosAleatorios();
  // Armazena os dados em variáveis do Cypress para uso posterior
  Cypress.env('adminData', dadosAdmin);
  return dadosAdmin;
})();

// Dados para login do administrador existente
export const adminLoginData = (() => {
  const dadosLoginAdmin = gerarDadosAleatorios();
  // Armazena os dados em variáveis do Cypress para uso posterior
  Cypress.env('adminLoginData', dadosLoginAdmin);
  return dadosLoginAdmin;
})(); 