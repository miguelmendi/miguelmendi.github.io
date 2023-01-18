const animais = document.getElementById("animais")
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");

console.log(gridSection[0])

const primeiraLi = document.querySelector ("li");
console.log(primeiraLi)

const primeiraUl = document.querySelector ("ul");
console.log(primeiraUl)

const linksInternos = document.querySelector("[href^='#']")
console.log(linksInternos)

const animaisImg = document.querySelectorAll(".animais img")
console.log(animaisImg)

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

console.log(gridSectionHTML)
console.log(gridSectionNode)

gridSectionNode.forEach(function(item, index){
  console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item) {
  console.log(item)
})

// Retorne no console todas as imagens do site
 const imgHTML = document.querySelectorAll("img")
 console.log(imgHTML)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemAnimal = document.querySelectorAll("img[src^='img/imagem']")

// Selecione todos os links internos (onde o href começa com #)
const linksInternos2 = document.querySelectorAll("[href^='#']")
console.log(linksInternos2)

// Selecione o primeiro h2 dentro de .animais-descricao
const descricaoH2 = document.querySelector ("h2 .animais-descraçao")

// Selecione o último p do site

const paragrafos = document.querySelectorAll("p")
console.log(paragrafos[paragrafos.length - 1])