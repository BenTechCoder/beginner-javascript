let button = document.querySelector('.butts')
function handleClick() {
    console.log("hello")
}
button.addEventListener('click', handleClick)

button.removeEventListener('click', handleClick)
// const buyItem = () => console.log("bought")

// buyButtons.forEach(buyButton => {
//     buyButton.addEventListener("click", buyItem)
// })

const buyButtons = document.querySelectorAll('button.buy')

function handleBuyButtonClick(event) {
    console.log(event.currentTarget)
    event.stopPropigation()
}

buyButtons.forEach(btn => {
btn.addEventListener('click', handleBuyButtonClick)
}
)

let photoEl = document.querySelector('img')

photoEl.addEventListener("mouseenter", function (e) {
    e.console.log('currentTarget:', currentTarget)
}
)