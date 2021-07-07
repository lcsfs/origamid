// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let years = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// for (let i = 0; i < years.length; i++) {
//   console.log(`Brazil won the ${years[i]} cup`);
// }

// Utilizando forEach
years.forEach(function(item) {
  console.log(`Brazil won the ${item} cup`);
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (let z = 0; z < frutas.length; z++) {
  console.log(frutas[z]);
  if (frutas[z] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
const fruit = frutas[frutas.length -1];
console.log(fruit);
