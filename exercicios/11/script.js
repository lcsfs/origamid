// Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgAnimals = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgAnimals);

// Selecione todos os links internos (onde o href começa com #)
const linkInternal = document.querySelectorAll('[href^="#"]');
console.log(linkInternal);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector(".animais-descricao h2");
console.log(firstH2);

// Selecione o último p do site
const lastParagraph = document.querySelectorAll("p");
console.log(lastParagraph[lastParagraph.length - 1]);
