// let divs = document.querySelector("div");

// console.log(divs);

// const h2 = document.querySelector("h2");

// console.dir(h2.innerHTML);

// let pizza = document.querySelector(".pizza");

// pizza.insertAdjacentText('afterbegin','zaa')

let image = document.querySelector('.nice')

function toggle() {
    
image.classList.toggle('round')

}

image.addEventListener('click', toggle)

image.alt = "cute pup";

image.setAttribute("data-cool", "cool")

console.log(image.dataset)

if (image.alt = "cute pup") {
    image.setAttribute("data-cool", "not cool")
    console.log(image.dataset)
}