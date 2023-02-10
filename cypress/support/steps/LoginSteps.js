/* global Given, Then, When */

import Auth from '../pages/LoginPage'
import Home from '../pages/HomePage'
import user from '../../fixtures/user.json'

Given("que eu estou na pagina de login", () => {
    cy.visit('#/login')
})

When("eu digitar o ID e a senha", () => {
    Auth.preencherCampoUserName(user.username)
    Auth.preencherCampoPassword(user.password)
})

And("clicar no botão de {string}", () => {
    Auth.clicarBotaoLogin()
})

Then("vou logar com sucesso na aplicação", () => {
    Home.validarMensagemBemVindo()
})
