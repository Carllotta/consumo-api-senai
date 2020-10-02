async function requestApi(){
    try{
        const url = "http://localhost:5000/api/filmes"
        const request = await fetch(url)
        const response = await request.json()
        return response
    } catch(error){
        throw new Error(error)
    }
}

const createElement = (tag) => document.createElement(tag)
const createTextNode = (element, text) => {
    const textNode = document.createTextNode(text)
    element.appendChild(textNode)
}
const appendElements = (fatherElement, childElement) => fatherElement.appendChild(childElement)

const bodyTable = document.querySelector("#body-table")

async function renderFilmes(){
    try{
        const filmes = await requestApi()
        
        for (filme of filmes){
            const tr = createElement("tr")

            const tituloFilm = createElement("td")
            createTextNode(tituloFilm, filme.titulo)
            
            const generoFilme = createElement("td")
            createTextNode(generoFilme, filme.idGeneroNavigation.nome)
            
            appendElements(tr, tituloFilm)
            appendElements(tr, generoFilme)

            appendElements(bodyTable, tr)
        }
    } catch(error){
        throw new Error(error)
    }
}