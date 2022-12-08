// Seletores de coleções HTML
let title = document.getElementsByTagName("h1")
// console.log(titulo)
title.item(0).innerText = "Título modificado via JS"

let subtitles = document.getElementsByClassName("subtitles")
console.log(subtitles)

for (const element of subtitles) {
    element.style = "color:red";
}