import { jurisai, login, mensagens, pessoas } from '../support/dados'

// Cenários de Login
Cypress.Commands.add('loginComDadosValidos', () => {
    cy.get('#input-email_login').type(login.emailValido);
    cy.get('#input-senha_login').type(login.senhaValida);
    cy.get('#login_submit').click();
  });

  Cypress.Commands.add('emailInvalido', () => {
    cy.get('#input-email_login').type(login.emailInvalido);
    cy.get('#input-senha_login').type(login.senhaValida);
    cy.get('#login_submit').click();
    cy.get('.invalid-feedback').should('contain', mensagens.erroEmailInvalido);
  });

  Cypress.Commands.add('senhaInvalida', () => {
    cy.get('#input-email_login').type(login.emailValido);
    cy.get('#input-senha_login').type(login.senhaInvalida);
    cy.get('#login_submit').click();
    cy.get('#feedback_senha_invalida').should('contain', mensagens.erroSenhaInvalida);
  });

  Cypress.Commands.add('camposVazios', () => {
    cy.get('#input-email_login').clear();
    cy.get('#input-senha_login').clear();
    cy.get('#login_submit').click();
    cy.get('.invalid-feedback').should('contain', mensagens.erroEmailInvalido);
  });

  //Acessar menu lateral
  Cypress.Commands.add('acessarMenuLateral', () => {
    cy.get('#hs-eu-cookie-confirmation-inner #hs-eu-confirmation-button').click()
    Cypress.on('uncaught:exception', () => false);
    cy.get('#topBarSettings .burguer', { timeout: 10000 }).should('be.visible').click({ force: true });
  });



  //Cenários de Calendário
  Cypress.Commands.add('acessarCalendario', () => {
    cy.get('#tour_agenda').click()
  });

  Cypress.Commands.add('alterarVisualizacaoListagem', () => {
    cy.get(':nth-child(2) > .fas').click()
  });

  Cypress.Commands.add('alterarVisualizacaoCalendario', () => {
    cy.get('a[title="Visualizar Calendário"] i.fa-calendar-o').click()
  });

  Cypress.Commands.add('visualizarMesAnterior', () => {
    cy.get('.header__cal #prev').click()
  });

  Cypress.Commands.add('visualizarMesPosterior', () => {
    cy.get('.header__cal #next').click()
  });


  //Cenários de Pessoas
  Cypress.Commands.add('acessarPessoas', () => {
    cy. get('.tooltip .icon-pessoas').click()
  });

  Cypress.Commands.add('pesquisarPessoas', () => {
    cy. get('#div_pesquisa_simples #pesquisa_simples').type(pessoas.nomeUsuario)
    cy.get('form#naoAtualizar').contains('button', 'Pesquisar').click()
  });

  Cypress.Commands.add('limparFiltroPessoas', () => {
    cy.get('.row > .content-search__btns > #limpar').click()
  });


  //Cenários JurisAI
  Cypress.Commands.add('acessarJurisAi', () => {
    cy. get('.tooltip-jia').click()
  });

  Cypress.Commands.add('bibliotecaPrompts', () => {
    cy.get('div.book-library a').click()
  });

  Cypress.Commands.add('selecionarPrompt', () => {
    cy.get('#todos_prompts .card-prompt-footer button').first().click()
    cy.get('textarea.list-prompt').eq(1).type(jurisai.pesquisa)
    cy.get('button[onclick="submitPlaceholderForm()"]').click()

  });

  Cypress.Commands.add('iniciarChatJuris', () => {
    cy.get('#input_chat_search').type(jurisai.pesquisa)
    cy.get('#sendMessageBtn').click()
    cy.get('.jconfirm-box').should('be.visible')
  });


