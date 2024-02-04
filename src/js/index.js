// Pensar na lógica - guia

/*
Objetivo 1- quando o usuario clicar no botao de selecao de plataformas,
deve abrir uma caixa com os botoes de selecao de plataforma.

Passo 1- prgar o botao de selecao de plataf no js pra verificar
quando o usuario clicar em cima

Passo 2- Pegar o elemnto de conteudo que precisa ser mostrado

Passo 3- pegar o click do usu no js

Passo 4- qund o usu click add a classe ATIVO na listagem de platf
dentro do botao pra q o conteud aparece

objetivo 2- caso a lista de botoes de plataformas
 ja esteja aparecendo e o usuario clicar em cima do botão, o conteúdodeve ser escondido.

 Passo 1- verificar se o botao ja esta aberto, se sim, devemos
 remover a classe de ATIVO pr q se esconda o conteudo novament
 */

 //Objetivo 1- quando o usuario clicar no botao de selecao de plataformas,deve abrir uma caixa com os botoes de selecao de plataforma.
 //Passo 1- prgar o botao de selecao de plataf no js pra verificar quando o usuario clicar em cima

const botao = document.querySelector(".btn-plataforma"); //seletor

//Passo 2- Pegar o elemnto de conteudo que precisa ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Passo 3- pegar o click do usu no js ctr+; comentar o codigo
botao.addEventListener("click", () => {

    //Passo 4- qund o usu click add a classe ATIVO na listagem de platf dentro do botao pra q o conteud aparece
 // elementoPlataformas.classList.add("ativo");

// Passo 1- verificar se o botao ja esta aberto, se sim, devemos remover a classe de ATIVO pr q se esconda o conteudo novament
//const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
// console.log(botaoEstaAberto);

elementoPlataformas.classList.toggle("ativo");

// if (botaoEstaAberto) {
//     elementoPlataformas.classList.remove("ativo");
// }else{
//     elementoPlataformas.classList.add("ativo");
// }

});


