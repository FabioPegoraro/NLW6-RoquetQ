import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')



// Pegar todos os botõescom a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    // Adicionar a escuta
    button.addEventListener("click", handleClick)
})

// Quando o botão delete for cliclado ele abre o modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lido" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId= document.querySelector("#room-id").dataset.id 
    const questionId = event.target.dataset.id

    //Mudando o action do formulário para a rota para onde vai as informçãoes e enviando junto as informações.
    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)


    //Pega o title, a descrição e o botão e muda o texto conforme o modal (Marcar como lida ou Excluir) desejado
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} essa pergunta` 

    // Se o check for true remove a classe red, se não deixa
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red") 


    //abrir modal
    modal.open()
}


