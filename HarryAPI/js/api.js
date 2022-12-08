let cards = document.getElementById("cards")

fetch("https://legacy--api.herokuapp.com/api/v1/characters").then(
    (response) => response.json()
).then(
    (json) => {
        json.forEach(
            (character) => createCard(character)
        )
    }
);

function createCard(character) {
    // Criação dos elementos HTML
    let container = document.createElement("div")
    let containerBody = document.createElement("div")
    let image = document.createElement("img")
    let name = document.createElement("h5")
    let species = document.createElement("p")

    // Personalizar os elementos HTML
    container.classList.add("card","my-4")
    containerBody.classList.add("card-body")

    image.src = (character.image_url != null) ? character.image_url : "img/generic.png"
    image.alt = character.name
    
    name.classList.add("card-title")
    name.innerText = character.name

    species.classList.add("card-text")
    species.innerText = character.species

    // Apendar elementos
    containerBody.appendChild(name)
    containerBody.appendChild(species)

    container.appendChild(image)
    container.appendChild(containerBody)

    cards.appendChild(container)
}