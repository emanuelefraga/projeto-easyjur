describe('Pessoas', () => {

    beforeEach('Acessar Pessoas', () => {
        cy.visit('/')
        cy.loginComDadosValidos()
        cy.acessarMenuLateral()
        cy.acessarPessoas()

    })
    it('Pesquisa simples de pessoas', () => {
        cy.pesquisarPessoas()
        
    });

    it('Limpar filtro de pesquisa', () => {
        cy.pesquisarPessoas()
        cy.limparFiltroPessoas()
        
    });

});