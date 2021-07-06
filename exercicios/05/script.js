// Crie uma função para verificar se um valor é Truthy
function check(x) {
    return !!x
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimeterSquare(x) {
    return x * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(name, midname) {
    return `${name} ${midname}`
};
fullName("Lucas", "Ferreira");

// Crie uma função que verifica se um número é par
function isEven(x) {
    console.log(x % 2 == 0 ? `${x} is even` : `${x} is odd`)
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function type(value) {
    return typeof value
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function () {
    console.log("Lucas Ferreira");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
    // a variável 'totalPaises' estava aqui
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
