/// <reference types="cypress" />

describe('Remoção de Contato', () => {
    it('Remover um contato existente', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
  
      // Passo 1: Localize o contato dentro da <ul> com a classe 'sc-eDDNvR cTVgex'
      cy.get('ul.sc-eDDNvR.cTVgex')
        .contains('Nome do Contato')
        .as('contato'); // Usamos 'as' para criar um alias para o contato
  
      // Passo 2: Clique no botão "Delete" com a classe '.delete' dentro do contato
      cy.get('@contato').find('.delete').click();
  
      // Passo 3: Verifique se o contato não está mais na lista
      cy.get('ul.sc-eDDNvR.cTVgex').should('not.contain', 'Nome do Contato');
    });
  });
  