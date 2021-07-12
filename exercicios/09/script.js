// Por qual motivo o código abaixo retorna com erros?
// as variaveis 'marca' e 'portas' estão dentro de um bloco, e não posso acessar 'const' e 'let' fora do bloco
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2
function somarDois(x) {
  // const dois = 2;
  return x + dois;
  // a const dois, só pode ser utilizada no bloco dessa função
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
