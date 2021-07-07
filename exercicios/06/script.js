// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let personalDatas = {
    firstName: 'Lucas',
    midName: 'Ferreira',
    age: 23,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
personalDatas.fullName = function() {
    return `${this.firstName} ${this.midName}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let cachorro = {
    raca: 'Labrador',
    color: 'black',
    age: 10,
    latir(person) {
        if (person === 'homem') return 'latiu'
    }
}
