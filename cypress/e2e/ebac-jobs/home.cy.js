/// <reference types="cypress" />

describe('Edição de Contato', () => {
    it('Editar um contato existente', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
  
      // Passo 1: Localize e clique no botão de edição com a classe 'edit'.
      cy.get('.edit').click();
  
    
    });
  });
  
  
  
  
  