var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var Estado = document.getElementById("Estado");

var saida = document.getElementById("saida-de-dados");

 function alertar(event){
// alert("Voce clicou no botao!!!" + " " + nome.value);

// var numero = 7;
// var resultado = numero % 2;
// if(resultado == o){
//       alert("este numero é par!");s
// } */

           saida.innerText = "Nome: " + nome.value + "\n Email: " + email.value;

}
    