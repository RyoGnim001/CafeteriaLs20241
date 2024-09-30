//Importa a lista  de itens do arquivo dataSet.js
import itens from './dataset.js';

//obtém a referência do corpo da tabela dos produtos queserão exibidos
const tableBody = document.getElementById('produtosTable');
//Obtém a referência do botão  que salva os novos itens
const saveButton = document.getElementById('saveButton')

//função que cria uma linha da tabela para cada item
const createTableRow = (item) => {
  return `
    <tr>
      <td><img src="${item.imagemUrl}" alt="${item.alt}" style="width: 100px;"></td>
      <td>${item.titulo}</td>
      <td>${item.descricao}</td>
    </tr>
  `;
};

// Função para renderizar a tabela
const renderTable = () => {
  let rows = ''; //inicializa uma string vazia para armazenar as linhas da tabela
  itens.forEach((item) => { //itera cada item da lista de itens
    rows += createTableRow(item); //adiciona uma linha gerada para o item string  rows
  });
  tableBody.innerHTML = rows; // atualiza o conteúdo da tabela com as novas linhas da tabela
};

//função para limpar os campos do formulario 
function reset_campos (){
  document.getElementById('nameInput').value = ''; //limpa o campo da entrada de nome
  document.getElementById('imageInput').value = ''; //limpa o campo da entrada de imagem 
  document.getElementById('descriptionInput').value = ''; //limpa o campo da entrada da descrição
}

// Função para adicionar um novo item na tabela
const addItemToTable = () => {
  //obtem valores dos campos de entrada
  const nameInput = document.getElementById('nameInput').value; //nome do item 
  const imageInput = document.getElementById('imageInput').value; //URL da imagem 
  const descriptionInput = document.getElementById('descriptionInput').value; //Descrição do item

  //Cria um novo Objeto item com os dados coletados
  const newItem = {
    imagemUrl: imageInput, 
    alt: nameInput,        
    titulo: nameInput,      
    descricao: descriptionInput 
  };

  
  itens.push(newItem); // adiciona o novo item a lista de itens
  
 
  renderTable(); //Re-renderiza a tabela para incluir o novo item

  reset_campos() //Limpa os campos do formulário após a adição
  
};

// Renderiza a tabela inicialmente com os itens existentes
renderTable();

// Adiciona um listener ao botão que chama a função 'addItemToTable' quando clicado
saveButton.addEventListener('click', addItemToTable);
