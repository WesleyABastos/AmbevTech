import { produtoElements } from '../elements/produtoElements';

class ProdutoPage {
  dadosProduto(produto) {
    cy.get(produtoElements.nomeInput).type(produto.nome);
    cy.get(produtoElements.precoInput).type(produto.preco);
    cy.get(produtoElements.descricaoTextarea).type(produto.descricao);
    cy.get(produtoElements.quantidadeInput).type(produto.quantidade);
  }

  carregarImagem(imagemPath) {
    cy.get(produtoElements.imagemInput)
      .attachFile(imagemPath, { subjectType: 'input' });
  }

  clicarCadastrar() {
    cy.contains('button', 'Cadastrar').click();
  }

  validacaoCadastro(produto) {
    cy.url().should('include', '/admin/listarprodutos');
    cy.get('tbody tr').contains('td', produto.nome).parent().within(() => {
      cy.get('td').eq(1).should('contain', produto.preco);
      cy.get('td').eq(2).should('contain', produto.descricao);
      cy.get('td').eq(3).should('contain', produto.quantidade);
    });
  }
}

export default new ProdutoPage(); 