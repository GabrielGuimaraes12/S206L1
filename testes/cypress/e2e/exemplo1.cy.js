/// <reference types="cypress"/>

// Função para preencher o formulário de registro
function preencherFormulario(nome, sobrenome, username, senha) {
  cy.get('.btn-link').click()
  cy.get('#firstName').type(nome)
  cy.get('#Text1').type(sobrenome)
  cy.get('#username').type(username)
  cy.get('#password').type(senha)
}
function SubtrairSenha(senha) {
  cy.get('#password').clear();
}

describe("Criando cenário de teste para o site globalsqa", () => {
  it('Caso de teste: Registrar no site com sucesso', () => {
   
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')

    preencherFormulario("Gabriel", "Guimaraes", "Guima", "Guima")

    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it('Caso de teste: Tentar registrar sem senha', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')

    
    preencherFormulario("Gabriel", "Guimaraes", "Guima", "2012")
    SubtrairSenha("2012")
    cy.get('.has-error > .help-block').should('contain.text', 'Password is required')
  })
})
