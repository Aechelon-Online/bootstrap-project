const checkboxes = document.querySelector(".entertainment-checkboxes")
const radios = document.querySelector(".event-radio-buttons")
const list = document.querySelector(".list")
const dots = document.querySelector(".dots")
const eventSelect = document.querySelector(".event-select")
const serviceSelect = document.querySelector(".service-select")

let isOpen = true

checkboxes.addEventListener('click', () => {
    list.classList.toggle("show")
    isOpen = !isOpen
    serviceSelect.innerText = isOpen ? "▼" : "✕"
})

radios.addEventListener('click', () => {
    dots.classList.toggle("show")
    isOpen = !isOpen
    eventSelect.innerText = isOpen ? "▼" : "✕"
})



// const changes = document.querySelectorAll("div")

// changes.forEach(change => {
//     change.addEventListener('click', () => change.classList.toggle("faded"));
//   });

// hide.addEventListener("click", () => {
//     console.log('clicked')
//     hide.classList.toggle("faded")
// })