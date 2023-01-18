//const imgs = document.querySelectorAll("img")


//imgs.forEach(function(item, index, array){
 // console.log(item, index, array)
//})

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

console.log(titulos)
console.log(titulosArray)

titulosArray.forEach(function(item){
  console.log(item);
});

const imgs = document.querySelectorAll("img")


imgs.forEach((item) =>{
  console.log(item)
})

// Mostre no console cada parágrado do site
const parágrafos = document.querySelectorAll("p") 
console.log(parágrafos)

parágrafos.forEach((item) => {
  console.log(item);
})

// Mostre o texto dos parágrafos no console

parágrafos.forEach((item) => {
  console.log(item,innerText);
})

// Como corrigir os erros abaixo:
const imgs1 = document.querySelectorAll('img');

imgs1.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++)
});

imgs.forEach(() => i++);
