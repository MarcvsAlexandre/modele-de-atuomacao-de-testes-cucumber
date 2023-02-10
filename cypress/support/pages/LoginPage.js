import user from '../../fixtures/user.json'
import util from '../utils'

const el =  require('../elements/MapElements').mapElements

class AuthPage {
    validateLogin() {
        cy.title().should('be.equal', 'Portal B2B')
        cy.get(el.LOGIN.USERNAME).should('be.visible')
        cy.get(el.LOGIN.PASSWORD).should('be.visible')
        cy.get(el.LOGIN.BTN_LOGIN).should('be.visible')
    }

    fastLogin(username, passwd) {
        cy.get(el.LOGIN.USERNAME).type(username)
        cy.get(el.LOGIN.PASSWORD).type(passwd)
        cy.get(el.LOGIN.BTN_LOGIN).click()
        cy.get('.page-title > h5.ng-binding', {timeout: 4000}).contains('Olá, Seja bem vindo')
    }

    preencherCampoUserName(username){
        cy.get(el.LOGIN.USERNAME).type(username)
    }

    preencherCampoPassword(passwd){
        cy.get(el.LOGIN.PASSWORD).type(passwd)
    }

    clicarBotaoLogin(){
        cy.get(el.LOGIN.BTN_LOGIN).click()
    }

    authenticateUser() {
        this.fastLogin(user.username, user.password)
    }

}

export default new AuthPage()

