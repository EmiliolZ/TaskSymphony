class homeSaucePage{

elements = {
    usernameImput: ()  => cy.get('#user-name'),
    passwordImput: ()  => cy.get('#password'),
    loginBtn: () => cy.get('#login-button'),

}
typeUsername(username){
    this.elements.usernameImput().type(username);
}

typePassword(password){
    this.elements.usernameImput().type(password);
    
}

clickLogin(username){
    this.elements.loginBtn().clicl();
}
}