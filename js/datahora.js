//Define uma função chamada data hora
const dataHora = () => {
  //obtem o elemento HTML com o ID hora
  let horaP = document.getElementById('hora');
  //Obtem o elemento HTML com o ID data
  let dataP = document.getElementById('data');
  //cria um objeto que contém data e hora atuais
  let dataHora = new Date();

  horaP.innerHTML = dataHora.toLocaleTimeString();
  //Define o elemento HTML que feine a hora
  dataP.innerHTML = dataHora.toLocaleDateString();
  //Define o elemento HTML que feine a data
};

let iniciarButtton = document.getElementById('iniciar');
//Obtém o elemnto HTML com Id iniciar
let idInterval = 0;
//declara uma variável que recebe o intervalo 0, que começa ao iniciar

iniciarButtton.onclick = (event) => {
  //define a função que inicia ao clicar o no botão iniciar
  idInterval = setInterval(dataHora, 1000);
  //Inicia a função datahora com intervalo de 1000 milisegundos (1 sgd)
};

let pararButton = document.getElementById('parar');
//obtém o elemento HTML parar

pararButton.onclick = (event) => {
  //Define uma funçao parar ao clicar no botão parar
  console.log(idInterval);
  //Exibe no console o ID do intervalo, para fins de depuração
  clearInterval(idInterval);
  //para o intervalo, impedindo que a função data hora seja chamada novamente
};

let body = document.body;
//obtem o elemento Body do documento
body.onmouseleave = (event) => {
  //define uma função quando o mouse sair do corpo da página
  let mensagemP = document.getElementById('mensagem');
  //Obtém o elemento HTML com o id mensagem
  mensagemP.innerHTML = `
    Por favor, não nos deixe.
    <img src='../imagem/please.png' width='10%'/>
  `;
};
//atualizao o conteúdo HTML de mensagemP com uma mensagem de despedida e uma mensagem

body.onmouseenter = (event) => {
  //define uma função que será execuitada quando mouse voltar para o escopo da página
  let mensagemP = document.getElementById('mensagem');
  //obtém o elemento HTML com o Id mensagem
  mensagemP.innerHTML = `
    Que bom sua volta.
    <img src='../imagem/happy.png' width='10%'/>
  `;
};
//atualiza o contúdo HTML de mensagemP com uma mensagem de boas vindas e uma imagem
