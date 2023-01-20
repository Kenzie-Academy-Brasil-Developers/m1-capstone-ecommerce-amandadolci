//Função para criar os EventListeners dos botões de adicionar os produtos:
function cardButtonListener() {
  let botoes = document.querySelectorAll('.add');
  for (let i = 0; i < botoes.length; i++) {
    let botao = botoes[i];

    botao.addEventListener('click', function (e) {
      let idProduto = e.target.id;
      let id = parseInt(idProduto.substring(4));

      let produto = procuraProduto(id);

      let minicard = cardCart(produto);

      count++;
      cartCount.innerHTML = count;
      soma += produto.value;
      total.innerHTML = `R$${soma},00`;

      if (document.querySelector(`#minicard${id}`) == null) {
        emptyCart.id = 'hide';
        cart.appendChild(minicard);
        unCount = 1;
      } else {
        let un = document.querySelector(`#un${id}`);
        let conversor = un.innerHTML;
        unCount = parseInt(`${conversor[1]}${conversor[2]}`);
        unCount++;
        if (unCount < 10) {
          un.innerHTML = `(0${unCount} un.)`;
        } else {
          un.innerHTML = `(${unCount} un.)`;
        }
      }
    });
  }
}
cardButtonListener();

// Função para criar e renderizar os cards dos produtos no carrinho, assim como EventListener do removeButton:
function cardCart(produto) {
  let li = document.createElement('li');
  li.classList = 'minicard';
  li.id = `minicard${produto.id}`;

  let img = document.createElement('img');
  img.classList = 'minicard-img';
  img.src = produto.img;

  let div = document.createElement('div');
  div.classList = 'minicard-div';

  let name = document.createElement('p');
  name.classList = 'minicard-nome';
  name.innerHTML = produto.nameItem;

  let span = document.createElement('span');

  let price = document.createElement('p');
  price.classList = 'minicard-preco';
  price.innerHTML = `R$${produto.value},00`;

  let un = document.createElement('p');
  un.id = `un${produto.id}`;
  un.innerHTML = '(01 un.)';

  let removeButton = document.createElement('button');
  removeButton.classList = 'remove';
  removeButton.id = `cart${produto.id}`;
  removeButton.innerHTML = 'Remover produto';

  removeButton.addEventListener('click', function (e) {
    count--;
    cartCount.innerHTML = count;
    soma -= produto.value;
    total.innerHTML = `R$${soma},00`;

    if (cartCount.innerHTML == 0) {
      emptyCart.removeAttribute('id');
    }
    let conversor = un.innerHTML;
    unCount = parseInt(`${conversor[1]}${conversor[2]}`);
    if (unCount == 1) {
      // let path = evento.composedPath();
      // let liCard = path[i];
      let liCard = e.composedPath()[2];
      liCard.remove();
    } else {
      unCount--;
      if (unCount < 10) {
        un.innerHTML = `(0${unCount} un.)`;
      } else {
        un.innerHTML = `(${unCount} un.)`;
      }
    }
  });

  li.appendChild(img);
  li.appendChild(div);
  div.appendChild(name);
  div.appendChild(span);
  span.appendChild(price);
  span.appendChild(un);
  div.appendChild(removeButton);

  return li;
}

// Efeito da lupa/input aparecendo/desaparecendo:
let lupa = document.querySelector('.search');
let input = document.querySelector('.input');
let inputText = document.querySelector('.input-text');
let lupaInput = document.querySelector('.input-search');

if (!lupa.id) {
  lupa.addEventListener('click', function () {
    lupa.id = 'hide';
    input.removeAttribute('id');
    if (!input.id) {
      lupaInput.addEventListener('click', function () {
        input.id = 'hide';
        lupa.removeAttribute('id');
      });
    }
  });
}
//

//Função para realizar a busca através da barra de pesquisa:
function search() {
  let correspondencias = [];
  if (inputText.value == '') {
    cardsRemoval();
    cardProdutos(data);
  } else {
    let inputValue = inputText.value.toLowerCase();
    for (let i = 0; i < data.length; i++) {
      let produto = data[i];
      let name = produto.nameItem.toLowerCase();
      let tag = produto.tag[0].toLowerCase();
      if (name.includes(inputValue) || tag.includes(inputValue)) {
        correspondencias.push(produto);
        cardsRemoval();
        filtroVazio.id = 'hide';
        cardProdutos(correspondencias);
      }
      // else {
      //   cardsRemoval();
      //   filtroVazio.removeAttribute('id');
      // }
    }
    cardButtonListener();
  }
}

//Função e EventListeners para realizar a filtragen dos produtos por categoria:
let arr = [];
function filtro(lista, e) {
  let arr = [];
  for (let i = 0; i < lista.length; i++) {
    let produto = lista[i];
    let filtro = e.target.innerHTML;
    if (filtro == produto.tag[0]) {
      arr.push(produto);
    } else if (filtro == 'Todos') {
      arr.push(produto);
    }
  }
  cardsRemoval();
  return arr;
}

let filtroTodos = document.querySelector('.todos');
filtroTodos.addEventListener('click', function (e) {
  e.preventDefault();
  cardProdutos(filtro(data, e));
  cardButtonListener();
});
let filtroAcessorios = document.querySelector('.acessorios');
filtroAcessorios.addEventListener('click', function (e) {
  e.preventDefault();
  cardProdutos(filtro(data, e));
  cardButtonListener();
});

let filtroCalcados = document.querySelector('.calcados');
filtroCalcados.addEventListener('click', function (e) {
  e.preventDefault();
  cardProdutos(filtro(data, e));
  cardButtonListener();
});

let filtroCalcas = document.querySelector('.calcas');
filtroCalcas.addEventListener('click', function (e) {
  e.preventDefault();
  cardProdutos(filtro(data, e));
  cardButtonListener();
});

let filtroCamisetas = document.querySelector('.camisetas');
filtroCamisetas.addEventListener('click', function (e) {
  e.preventDefault();
  cardProdutos(filtro(data, e));
  cardButtonListener();
});
//
