           
           
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
                      //validação de dados
                if(cep.value.lenght < 8 ){
                    alert('Entre vom um cep válido!');
                    return;
                }

                //formatar os dados
                cep.velue = cep.value.replase('-','');

                const url = `https://viacep.com.br/ws/${cep.value}/json`;

                        fetch(url)
                            .then( resposta=> {
                            return resposta.jason();
                            })
                                      
                            
                            .then(dadosDoEndereco=>{
                                    logradouro.value = dadosDoEndereco.logradouro;
                                    bairro.value = dadosDoEndereco.bairro;
                                    cidade.value = dadosDoEndereco.localidade;
                                    Estado.value = dadosDoEndereco.uf;
                                    complemento.value = dadosDoEndereco.complemento;
                                               
                                    saidaDeDados(); // chamada de função
                                                                            })
                                                                        
                                .catch(function(e){
                                    alert(e.menssage());
                                });
          
                            
    function saidaDeDados(){
           saida.innerText = "nome: " + nome.value + "\n email: " + email.value;
           "\n email: " + email.value +
           "\n telefone: " + telefone.value +
           "\n cep: " + cep.value +
           "\n logradouro: " + logradouro.value +
           "\n numero: " + numero.value +
           "\n complemento: " + complemento.value +
           "\n bairro: " + bairro.value +
           "\n cidade: " + cidade.value +
           "\n Estado: " + Estado.value;
    }
}
