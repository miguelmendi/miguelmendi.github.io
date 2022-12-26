//window.alert("Isso mesmo");

const href = window.location.href;

console.log(href);

if (href === "http://127.0.0.1:5500/o-que-e-o-dom/index.html") {
  console.log("É igual");
}

const h1selecionado = document.querySelector("h1");
const h1Classes = h1selecionado.classList;

function callbackh1() {
  console.log("Clicou em", h1selecionado.innerText);
}

h1selecionado.addEventListener("click", callbackh1);

// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela

const windowWidth = window.innerWidth;
console.log(windowWidth);
