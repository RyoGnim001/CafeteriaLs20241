//importa uma linha de conjunto de itens do arquivo dataset.js
import itens from './dataset.js'

if (localStorage.getItem('produtos') == undefined) {
  //verifica se não há produtos armazenados no localStorage
  localStorage.setItem('produtos', JSON.stringify(itens));
  //se não houver armazena informções em formato de JSON
}

const createCards = () => {
  //Define a função
  let produtos = JSON.parse(localStorage.getItem('produtos'));
  //obtém os produtos armazenados no local storage e converte em objetos para JS
  for (let produto of produtos) {
    //Inteira os produtos
    let card = createCardItem(produto);
    //Chama a função para criar um cartão para o produto atual
    let cardsDiv = document.getElementById('cards');
    //obtém o elemento DOM onde os cartões serão adicionados
    cardsDiv.insertAdjacentHTML('beforeend', card);
    //insere um cartão HTML no final da lista
  }
};

const createCardItem = (item) => {
  //define uma função chmada createCardItem  que cria um cartão HTML , para cvada item
  return `<div class="col m-2">
      <div class="card">
        <img src="${item.imagemUrl}" class="card-img-top" alt="${item.alt}">
        <div class="card-body">
          <h5 class="card-title">${item.titulo}</h5>
          <p class="card-text">${item.descricao}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>`;
};
//retorna uma string HTML que representa um cartão com imagem, titulo e descrição

// while
// for(;;)
// itens.map(()=>{});
// itens.forEach(()=>{});

createCards();
//chama a função para ecibir ela na página
