const checkboxes = document.querySelector(".entertainment-checkboxes")
const radios = document.querySelector(".event-radio-buttons")

checkboxes.addEventListener('click', () => {
    document.querySelector(".list").classList.toggle("show")
})

radios.addEventListener('click', () => {
    document.querySelector(".dots").classList.toggle("show")
})



// const changes = document.querySelectorAll("div")

// changes.forEach(change => {
//     change.addEventListener('click', () => change.classList.toggle("faded"));
//   });

// hide.addEventListener("click", () => {
//     console.log('clicked')
//     hide.classList.toggle("faded")
// })