// Operadores relacionais
/* 
    Maior: >
    Menor: <
    Igual: ==
    Diferença: !=
    Maior ou igual à: >=
    Menor ou igual à: <=
*/
let btnVerify = document.getElementById("btnVerify")
let inputYear = document.getElementById("yearOfBorn")
let divFeedback = document.getElementById("divFeedback");
let withMajor = document.getElementById("withMajor");

btnVerify.addEventListener("click", () => {
    let yearOfBorn = inputYear.value
    let maxYear = (new Date).getFullYear() - 100

    if (yearOfBorn == "") {
        // inputYear.classList.add("border", "border-2", "border-danger");
        inputYear.classList.add("is-invalid")
        divFeedback.innerText = "Preencha o campo"
    } else if (parseInt(yearOfBorn) < maxYear) {
        inputYear.classList.add("is-invalid")
        divFeedback.innerText = "A data digitada é muito menor que o limite máximo"
    }else {
        inputYear.classList.remove("is-invalid")
        inputYear.classList.add("is-valid")
        accessVerify(new Date().getFullYear() - yearOfBorn)
    }
})

function accessVerify(age) {
    if (age >= 18 && !withMajor.checked) {
        alert("Seja bem-vindo ao nosso sistema!!!");
    } else if (age >= 16 && withMajor.checked) {
        alert("Sejam bem-vindos ao nosso sistema!!!")
    }else {
        alert("Lamento, seu acesso não foi permitido!!!")
    }
}