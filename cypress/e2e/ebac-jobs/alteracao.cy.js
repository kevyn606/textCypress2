/// <reference types="cypress" />

describe('Edição de Contato', () => {
    it('Editar um contato existente', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
  
      // Passo 1: Localize a <ul> com a classe 'sc-eDDNvR cTVgex' que contém o botão "Editar"
      cy.get('ul.sc-eDDNvR.cTVgex')
        .contains('Editar')
        .click();
  
      // Passo 2: Verifique se os campos de edição estão visíveis
      cy.get('.sc-gLDzan.ckeKmo').should('be visible');
  
      // Passo 3: Preencha os campos de edição com os novos valores
      cy.get('.sc-gLDzan.ckeKmo input').eq(0).clear().type('Novo Nome');
      cy.get('.sc-gLDzan.ckeKmo input').eq(1).clear().type('9876543210');
      cy.get('.sc-gLDzan.ckeKmo input').eq(2).clear().type('novo@example.com');
  
      // Passo 4: Clique no botão de "Salvar" com a classe 'alterar'
      cy.get('.alterar').click();
  
      // Passo 5: Verifique se as alterações foram salvas com sucesso
      cy.contains('Novo Nome');
    });
  });
  