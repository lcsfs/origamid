// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var ageLucas = 23;
var ageGabriel = 20;

if (ageLucas > ageGabriel) {
    console.log(`É maior!`);
} else if (ageLucas === ageGabriel) {
    console.log(`É igual!`);
} else {
    console.log(`É menor!`);
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; // 3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Lucas";
var idade = 23;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

console.log(brasil > china ? `Brazil has more inhabitants` : `China has more inhabitants`)


// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
// "Falso"

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
// "Cão"
