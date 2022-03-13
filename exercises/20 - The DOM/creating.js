let para = document.createElement('p')
para.textContent = "hello, it's me, a p"
console.log(para)

const wrappaDiv = document.createElement('div');
wrappaDiv.classList.add('wrapper')

wrappaDiv.appendChild(para);

const heading = document.createElement('h2')
heading.textContent = "Hello"

document.body.appendChild(wrappaDiv);

wrappaDiv.insertAdjacentElement("afterbegin", heading)

const koopaLi = document.createElement('ul')
 koopaLi.innerHTML = `
 <li>Bowser</li>
 <li>lemmy</li>
 `;

const marioTime = ["mario", "luigi", "toad"];
// for (let index = 0; index < marioTime.length; index++) {
//     let itsTime = `<li>${marioTime[index]}</li>`
 
//     console.log(itsTime);
//     koopaLi.insertAdjacentElement("afterbegin", itsTime)
//   }
wrappaDiv.insertAdjacentElement("afterend", koopaLi);



