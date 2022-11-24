// Comandos de saída de dados
// 1° Utilizando a função Write
// document.open()
// document.write("<h1> Hello World!!!</h1> ")
// Outros Write
// document.close()

// 2° Utilizando a função Inner HTML / Inner Text
// document.body.innerHTML = "<p>Um texto inserido via JS</p>"
// document.body.innerText = "<p>Outro texto inserido via JS</p>"

// 3° Utilizando o objeto console
// console.log("Um log de sistema!!!")
// console.warn("Um log de advertência!!!")
// console.error("Um log de erro!!!")
// console.debug("Um log de debug!!!")

// 4° Utilizando a função alert
// alert("Bem-vindo ao nosso sistema!!!")

// ------------- Manipulação do DOM  ------------------------
let titulo = document.getElementById("titulo")
let paragrafo = document.getElementById("paragrafo")

console.debug(titulo)
console.debug(paragrafo)

titulo.innerText = "Um título modificado via JS"
paragrafo.innerText = "Um parágrafo modificado via JS"

let URlImage =
    "https://i0.wp.com/lampadanerd.com.br/wp-content/uploads/2022/11/Power-Rangers.jpg?resize=1000%2C540&ssl=1";
let imageElement = document.createElement("img")
// Adicionar a URL da imagem
imageElement.src = URlImage
// Adicionar um ID na imagem
imageElement.id = "powerRangerGreen"
imageElement.width = 600
// Adicionar o elemento img criado a tela
document.body.appendChild(imageElement)

// ------------------ Eventos -----------------------------
let buttonIncrementWidth = document.createElement("button")
buttonIncrementWidth.id = "buttonIncrementWidth"
buttonIncrementWidth.classList.add("btn", "btn-primary","d-block","my-3")
buttonIncrementWidth.innerText = "Incrementar Largura"

document.body.appendChild(buttonIncrementWidth)

let buttonDecrementWidth = document.createElement("button")
buttonDecrementWidth.id = "buttonDecrementWidth"
buttonDecrementWidth.innerText = "Decrementar Largura"
buttonDecrementWidth.classList.add("btn", "btn-primary", "d-block", "my-3")

document.body.appendChild(buttonDecrementWidth)

buttonIncrementWidth.addEventListener("click", () => {
   imageElement.width += 50
})

buttonDecrementWidth.addEventListener('click', () => {
    imageElement.width -= 50
})