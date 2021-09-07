function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const lucas = new Pessoa('Lucas', 23);

// as propriedades e os métodos são definidos na propriedade 'prototype' nas funções contrutoras dos Objetos, não nas próprias instâncias do objeto.

Pessoa.prototype.andar = () => {
  return 'pessoa andou'
}

// console.log(Pessoa.prototype);
// console.log(lucas.prototype);

const pais = 'Brasil';
const cidade = new String('São Paulo');

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String


// ===================================================

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age
}

const myName = new Person('Lucas', 'Ferreira', 23)

Person.prototype.fullName = function () {
  return `${myName.firstName} ${myName.lastName}`
}

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
