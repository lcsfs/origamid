// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragraph = document.querySelectorAll('p');

const totalCharacter = Array.prototype.reduce.call(paragraph, (total, currentValue) => {
  return total + currentValue.innerText.length;
}, 0);

console.log(totalCharacter);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createElem(tag, classe, conteudo ) {
  const element = document.createElement(tag);
  classe ? element.classList.add(classe) : null;
  conteudo ? element.innerHTML = conteudo : null;
  return element
}

console.log(createElem('p', 'conteudo', 'aqui vai o conteudo'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const titleH1 = createElem.bind(null, 'h1', 'titulo');

console.log(titleH1('Curso de Javascript'));