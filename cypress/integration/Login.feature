@login
Feature: Log-In

    Testes de Login

    @success
    Scenario: Logar com sucesso
        Given que eu estou na pagina de login
        When eu digitar o ID e a senha
        And clicar no botão de "Login"
        Then vou logar com sucesso na aplicação
