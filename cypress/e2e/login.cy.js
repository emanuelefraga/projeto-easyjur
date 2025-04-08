describe('Login', () => {

    beforeEach('Acessar tela de login', () => {
        cy.visit('/')

    })
    it('Login com sucesso', () => {
        cy.loginComDadosValidos()
    });

    it('Email inválido', () => {
        cy.emailInvalido()
    });
    // it('Senha Inválida', () => {
    //     cy.senhaInvalida()
    // })

    it('Campos vazios', () => {
        cy.camposVazios()
    });
});

