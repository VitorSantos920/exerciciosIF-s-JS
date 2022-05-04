var email = "aluno@basesocial.org";
var senha = "base@2022";

var emailInserido = window.prompt("Digite seu email!");
var senhaInserida = window.prompt("Digite sua senha!");

if(emailInserido == email && senhaInserida == senhaInserida) {
    window.alert("Login aprovado. Bem vindo!");
} else { 
    window.alert("Email e/ou senha incorretos. Tente novamente!");
}

