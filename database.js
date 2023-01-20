// Banco de dados dos produtos
const data = [
  // {
  //   id: 1,
  //   img: './img/jaqueta.svg',
  //   nameItem: 'Jaqueta Corta Vento',
  //   description:
  //     'Dê um up no seu guarda-roupa com esta jaqueta perfeita para temperaturas amenas e material...',
  //   value: 200,
  //   addCart: 'Adicionar ao carrinho',
  //   tag: ['Camisetas'],
  // },
  {
    id: 1,
    img: './img/simple-white-hoodie.png',
    nameItem: 'Moletom Sportswear',
    description:
      'Esse moletom com capuz é feito com tecido denso e macio dias frios e conforto duradouro.',
    value: 319,
    addCart: 'Adicionar ao carrinho',
    tag: ['Camisetas'],
  },
  {
    id: 2,
    img: './img/Calça Nike 02.png',
    nameItem: 'Calça Jordan Essential',
    description:
      'Esse moletom traz a versatilidade que você precisa para o dia a dia, possui ajuste relaxado fácil e um...',
    value: 399,
    addCart: 'Adicionar ao carrinho',
    tag: ['Calças'],
  },
  // {
  //   id: 3,
  //   img: './img/mascara.svg',
  //   nameItem: 'Máscara facial',
  //   description:
  //     'Esta máscara facial durável é feita de duas camadas de tecido e possui presilhas para maior con...',
  //   value: 20,
  //   addCart: 'Adicionar ao carrinho',
  //   tag: ['Acessórios'],
  // },
  // {
  //   id: 4,
  //   img: './img/camiseta_preta.svg',
  //   nameItem: 'T-Shirt Preta',
  //   description:
  //     'Esta t-shirt é imprescindível no seu guarda-roupa, combina conforto e um caimento perfeito para looks...',
  //   value: 120,
  //   addCart: 'Adicionar ao carrinho',
  //   tag: ['Camisetas'],
  // },
  {
    id: 3,
    img: './img/Bermuda Nike 04.png',
    nameItem: 'Shorts Dri-FIT',
    description:
      'Supere seu limite durante treinos de alta intensidade com esse Shorts Dri-FIT. Tecido flexível que...',
    value: 159,
    addCart: 'Adicionar ao carrinho',
    tag: ['Calças'],
  },
  {
    id: 4,
    img: './img/gorro.png',
    nameItem: 'Gorro Grafite',
    description:
      'O gorro é perfeito para compor looks de inverno, possui um visual minimalista e é um grande aliado...',
    value: 80,
    addCart: 'Adicionar ao carrinho',
    tag: ['Acessórios'],
  },
  {
    id: 5,
    img: './img/Mochila Nike.png',
    nameItem: 'Mochila SB Courthouse',
    description:
      'Esta mochila proporciona um amplo espaço para armazenar seu equipamento, com alças na...',
    value: 399,
    addCart: 'Adicionar ao carrinho',
    tag: ['Acessórios'],
  },
  {
    id: 6,
    img: './img/nike-air-force-2.png',
    nameItem: 'Nike Air Force 1 Branco',
    description:
      'O brilho perdura no Nike Air Force 1, o tênis original do basquete que dá um toque de inovação naquilo',
    value: 899,
    addCart: 'Adicionar ao carrinho',
    tag: ['Calçados'],
  },
  {
    id: 7,
    img: './img/Chapéu.png',
    nameItem: 'Chapéu Bucket',
    description:
      'É feito com tecido ripstop repelente de água para conforto leve e durabilidade.',
    value: 449,
    addCart: 'Adicionar ao carrinho',
    tag: ['Acessórios'],
  },
  {
    id: 8,
    img: './img/Calça Nike 011.png',
    nameItem: 'Calça Tech Fleece',
    description:
      'Ideais para o tempo mais frio e perfeitas para o uso diário. Espaçosa na coxa, seu design...',
    value: 379,
    addCart: 'Adicionar ao carrinho',
    tag: ['Calças'],
  },
  {
    id: 9,
    img: './img/camiseta_branca.png',
    nameItem: 'T-Shirt Branca',
    description:
      'Agora você encontrou a camiseta básica do seu guarda-roupa. É confeccionada em um tecido de...',
    value: 120,
    addCart: 'Adicionar ao carrinho',
    tag: ['Camisetas'],
  },
  {
    id: 10,
    img: './img/turtleneck-sweater.png',
    nameItem: 'Suéter Gola Rolê Grafite',
    description:
      'A blusa de manga longa é confeccionada em malha e possui um aspecto rústico e um ótimo...',
    value: 229,
    addCart: 'Adicionar ao carrinho',
    tag: ['Camisetas'],
  },
  {
    id: 11,
    img: './img/Bolsa Transversal.png',
    nameItem: 'Bolsa Transversal',
    description:
      'Mantenha seu estilo clássico e carregue todos seus itens essenciais nessa bolsa com alça...',
    value: 250,
    addCart: 'Adicionar ao carrinho',
    tag: ['Acessórios'],
  },
  {
    id: 12,
    img: './img/nike-air-force-1.png',
    nameItem: 'Nike Air Force 1 Preto',
    description:
      'O brilho perdura no Nike Air Force 1, o tênis original do basquete que dá um toque de inovação naquilo',
    value: 799,
    addCart: 'Adicionar ao carrinho',
    tag: ['Calçados'],
  },
  {
    id: 13,
    img: './img/Bermuda Nike 03.png',
    nameItem: 'Shorts PSG Cargo',
    description:
      'Perfeitos para o dia a dia, são fabricados com fleece escovado macio que proporciona uma...',
    value: 279,
    addCart: 'Adicionar ao carrinho',
    tag: ['Calças'],
  },
  {
    id: 14,
    img: './img/Boné Nike.png',
    nameItem: 'Boné Classic 99',
    description:
      'O boné Classic 99 Trucker inclui o clássico bordado no painel frontal e um fechamento ajustável.',
    value: 209,
    addCart: 'Adicionar ao carrinho',
    tag: ['Acessórios'],
  },
  {
    id: 15,
    img: './img/moletom.png',
    nameItem: 'Jaqueta Champion',
    description:
      'Proteja-se dos elementos com a jaqueta embalável Champion. Esta peça feita em poliéster premium...',
    value: 250,
    addCart: 'Adicionar ao carrinho',
    tag: ['Camisetas'],
  },
  {
    id: 16,
    img: './img/Bermuda Nike 02.png',
    nameItem: 'Shorts Sportswear Club',
    description:
      'Mais armazenamento. Mais leve. Os shorts cargo Sportswear Club são fabricados com french terry...',
    value: 209,
    addCart: 'Adicionar ao carrinho',
    tag: ['Calças'],
  },
  {
    id: 17,
    img: './img/Bermuda Nike 01.png',
    nameItem: 'Shorts Tech Fleece',
    description:
      'Feitos com fleece espaçador de dupla face, criado para maximizar o aquecimento sem adicionar...',
    value: 279,
    addCart: 'Adicionar ao carrinho',
    tag: ['Calças'],
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
