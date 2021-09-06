// Transforme o objeto abaixo em uma Constructor Function
function Person(name, age) {
  this.nome = name,
  this.idade = age,
  this.andar = function() {
    console.log(`${name} andou`)
  }
};

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Person('João', 20);
const maria = new Person('Maria', 25);
const bruno = new Person('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList
  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    })
  }
}

const itensList = new Dom('li')

// itensList.addClass('ativar');