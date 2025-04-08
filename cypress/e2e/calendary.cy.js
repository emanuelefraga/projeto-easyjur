describe('Calendario', () => {

    beforeEach('Acessar Calendário', () => {
        cy.visit('/')
        cy.loginComDadosValidos()
        cy.acessarMenuLateral()
        cy.acessarCalendario()

    })
    it('Visualizar mês anterior', () => {
        cy.visualizarMesAnterior()
    });

    it('Visualizar mês posterior', () => {
        cy.visualizarMesPosterior()
        
    });

    it('Alterar para visualização de listagem', () => {
        cy.alterarVisualizacaoListagem()
        
    });

    it('Alterar para visualização de calendário', () => {
        cy.alterarVisualizacaoCalendario()
  });

});


