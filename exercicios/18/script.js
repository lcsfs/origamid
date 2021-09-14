// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const arrCursos = Array.from(cursos);

const objCursos = arrCursos.map((curso) => {
  const titulo = curso.querySelector('h1').textContent
  const descricao = curso.querySelector('p').textContent
  const aulas = curso.querySelector('.aulas').textContent
  const horas = curso.querySelector('.horas').textContent
  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
});

console.log(objCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

// resposta
const maiorQue = numeros.filter(x => x > 100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

// resposta
const baixoIns = instrumentos.some((item) => {
  return item === 'Baixo'
});

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
];

// resposta
const totalCompras = compras.reduce((ac, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
  return ac + precoLimpo;
}, 0);

console.log(totalCompras);