const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer')

const modalInner = document.querySelector('.modal-inner')
function handleCardButtonClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card')
    const imgSrc = card.querySelector('img').src
    console.log(imgSrc)
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
  
   modalInner.innerHTML =
   `
   <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
   <p>${desc}</p>
   `;
modalOuter.classList.add('open')
}



cardButtons.forEach(button => button.addEventListener("click", handleCardButtonClick))

function closeModal(e) {
    
    const isOutside = !e.target.closest('.modal-inner')
    if (isOutside) {
        modalOuter.classList.remove('open')
    }
}

modalOuter.addEventListener('click', closeModal
)