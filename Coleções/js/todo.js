let inputTask = document.getElementById("inputTask")
let tasksList = document.getElementById("tasksList")
let numberOfTasks = document.getElementById("numberOfTasks")
let tasks = []

document.querySelector("#btnAddTask").addEventListener("click", () => {
    let taskText = inputTask.value
    // Validação do que foi digitado

    // Criação dos elementos
    let container = document.createElement("div")
    let checkbox = document.createElement("input")
    let label = document.createElement("label")

    // Configuração dos elementos
    label.innerText = taskText
    checkbox.setAttribute("type", "checkbox")
    
    // Atrelar ou adicionar os elementos na tela
    container.appendChild(checkbox)
    container.appendChild(label)

    tasksList.appendChild(container)

    inputTask.value = ""

    // Adicionar ao array
    tasks.push(container)

    numberOfTasks.innerText = tasks.length
})
