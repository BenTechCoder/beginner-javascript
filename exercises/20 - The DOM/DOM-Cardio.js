// Make a div
const div = document.createElement("div");

// add a class of wrapper to it
div.classList.add("wrapper");

// put it into the body
document.body.append(div);
// make an unordered list
const ul = document.createElement("ul");

// add three list items with the words "one, two, three" in them

const li2 = document.createElement("li");
const li1 = document.createElement("li");
const li3 = document.createElement("li");
li1.textContent = "I am li1";
li2.textContent = "I am li2";
li3.textContent = "I am li3";

ul.appendChild(li2);
ul.appendChild(li1);
ul.appendChild(li3);
// put that list into the above wrapper
div.appendChild(ul);
// create an image
const img = document.createElement("img");

// set the source to an image
img.src = "https://source.unsplash.com/random/300x300";
// set the width to 250
img.setAttribute("width", "250px");
console.log("img:", img);
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "cute pupper";
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it

const htmlString = `
<div>
<p>hello</p>
<p>goodby</p>
</div>`;

let htmlFragment = document.createRange().createContextualFragment(htmlString);
let pAddClass = htmlFragment.querySelectorAll("p")[1];
let removeP = htmlFragment.querySelectorAll("p")[0];
removeP.remove();
pAddClass.classList.add("warning");
// put this div before the unordered list from above
div.prepend(htmlFragment);

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  let ageInDogYears = age + 5;

  let playerHtml = `
    <div class="playerCard">
   <h2>${name} — ${age}</h2>
   <p>They are ${height} and AGE years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
   <button class = "delete-btn">delete me</button>
 </div>

    `;
  let playerCard = document.createRange().createContextualFragment(playerHtml);
  return playerCard;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
let playerDiv = document.createElement("div");
playerDiv.classList.add("playerDiv");
playerDiv.appendChild(generatePlayerCard("jason", 45, 5));
playerDiv.appendChild(generatePlayerCard("emily", 25, 7));
playerDiv.appendChild(generatePlayerCard("luke", 35, 3));
playerDiv.appendChild(generatePlayerCard("landon", 60, 6));
// make 4 player cards using generatePlayerCard
div.insertAdjacentElement("beforebegin", playerDiv);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
let deleteBtn = document.querySelectorAll("button.delete-btn");
// make out delete function
function deleted(e) {
  e.parentElement.remove()
}


deleteBtn.forEach(el => {
  el.onclick = () => deleted(el)
});

