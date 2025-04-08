describe('JurisAI', () => {

    beforeEach('Acessar tela de login', () => {
        cy.visit('/')
        cy.loginComDadosValidos()
        cy.acessarMenuLateral()
        cy.acessarJurisAi()

    })
    it('Consultar biblioteca de prompts', () => {
        cy.bibliotecaPrompts()
    });

    it('Iniciar chat', () => {
        cy.iniciarChatJuris()
    });

    it('Realizar pesquisa', () => {
        cy.bibliotecaPrompts()
        cy.selecionarPrompt()
    });

});

