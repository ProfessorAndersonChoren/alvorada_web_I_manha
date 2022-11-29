let inputOne = document.getElementById("inputOne")
let inputTwo = document.getElementById("inputTwo")
let divOutput = document.getElementById("divOutput")

function showMessage(message) {
    divOutput.innerText = message
    divOutput.classList.remove("d-none")
}

document.getElementById("btnSum").addEventListener("click", () => {
    let numberOne = parseFloat(inputOne.value)
    let numberTwo = parseFloat(inputTwo.value)

    let sum = numberOne + numberTwo

    showMessage(`A soma dos números ${numberOne} e ${numberTwo} é igual à ${sum}`)
})