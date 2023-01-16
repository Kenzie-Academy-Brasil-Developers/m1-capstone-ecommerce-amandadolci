// Banco de dados dos produtos
const data = [
  {
    id: 1,
    img: './img/jaqueta.svg',
    nameItem: 'Jaqueta Corta Vento',
    description:
      'Dê um up no seu guarda-roupa com esta jaqueta perfeita para temperaturas amenas e material...',
    value: 200,
    addCart: 'Adicionar ao carrinho',
    tag: ['Camisetas'],
  },
  {
    id: 2,
    img: './img/gorro.svg',
    nameItem: 'Gorro Grafite',
    description:
      'O gorro é perfeito para compor looks de inverno, possui um visual minimalista e é um grande aliado...',
    value: 80,
    addCart: 'Adicionar ao carrinho',
    tag: ['Acessórios'],
  },
  {
    id: 3,
    img: './img/mascara.svg',
    nameItem: 'Máscara facial',
    description:
      'Esta máscara facial durável é feita de duas camadas de tecido e possui presilhas para maior con...',
    value: 20,
    addCart: 'Adicionar ao carrinho',
    tag: ['Acessórios'],
  },
  {
    id: 4,
    img: './img/camiseta_preta.svg',
    nameItem: 'T-Shirt Preta',
    description:
      'Esta t-shirt é imprescindível no seu guarda-roupa, combina conforto e um caimento perfeito para looks...',
    value: 120,
    addCart: 'Adicionar ao carrinho',
    tag: ['Camisetas'],
  },
  {
    id: 5,
    img: './img/camiseta_branca.svg',
    nameItem: 'T-Shirt Branca',
    description:
      'Agora você encontrou a camiseta básica do seu guarda-roupa. É confeccionada em um tecido de...',
    value: 120,
    addCart: 'Adicionar ao carrinho',
    tag: ['Camisetas'],
  },
  {
    id: 6,
    img: './img/moletom.svg',
    nameItem: 'Jaqueta Champion',
    description:
      'Proteja-se dos elementos com a jaqueta embalável Champion. Esta peça feita em poliéster premium...',
    value: 250,
    addCart: 'Adicionar ao carrinho',
    tag: ['Camisetas'],
  },
];

//Declaração das principais variáveis fora das funções:
let ulMain = document.querySelector('.ul-main');
let filtroVazio = document.querySelector('.empty-main');
let cart = document.querySelector('.ul-aside');
let emptyCart = document.querySelector('.empty-cart');
let cartCount = document.querySelector('#count');
let total = document.querySelector('#total');
let count = 0;
let soma = 0;
let unCount;

// Função para criar e renderizar os cards dos produtos:
function cardProdutos(lista) {
  if (lista.length == 0) {
    filtroVazio.removeAttribute('id');
  } else {
    filtroVazio.id = 'hide';
    for (i = 0; i < lista.length; i++) {
      let card = lista[i];
      let ulMain = document.querySelector('.ul-main');
      let liCard = document.createElement('li');
      liCard.classList = 'card';
      ulMain.appendChild(liCard);

      let cardImgA = document.createElement('a');
      cardImgA.classList = 'card-img-a';
      liCard.appendChild(cardImgA);

      let cardImg = document.createElement('img');
      cardImg.classList = 'card-img';
      cardImg.src = card.img;
      cardImg.alt = card.nameItem;
      cardImgA.appendChild(cardImg);

      let tag = document.createElement('p');
      tag.classList = 'categoria';
      tag.innerHTML = card.tag;
      liCard.appendChild(tag);

      let item = document.createElement('a');
      item.classList = 'nome-produto';
      item.innerHTML = card.nameItem;
      liCard.appendChild(item);

      let desc = document.createElement('p');
      desc.classList = 'descricao';
      desc.innerHTML = card.description;
      liCard.appendChild(desc);

      let price = document.createElement('p');
      price.classList = 'preco';
      price.innerHTML = `R$${card.value},00`;
      liCard.appendChild(price);

      let addButton = document.createElement('button');
      addButton.classList = 'add';
      addButton.id = `card${card.id}`;
      addButton.innerHTML = card.addCart;
      liCard.appendChild(addButton);
    }
  }
}
cardProdutos(data);

//Função para buscar os produtos pelo seu id:
function procuraProduto(id) {
  for (let i = 0; i < data.length; i++) {
    let produto = data[i];
    if (produto.id == id) {
      return produto;
    }
  }
}

//Função para limpar os cards do display:
function cardsRemoval() {
  let liCards = document.querySelectorAll('.card');
  for (let i = 0; i < liCards.length; i++) {
    liCards[i].remove();
  }
}
