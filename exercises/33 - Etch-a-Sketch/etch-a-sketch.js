
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;
let hue = 0;

// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.lineTo(x, y);
ctx.moveTo(x, y);
ctx.stroke();

function draw({ key }) {
    hue += 5;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;

    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height)
    canvas.addEventListener("animationend", () =>
    {
        canvas.classList.remove('shake')
    }, {once: true})
}

function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

shakebutton.addEventListener('click', clearCanvas)

window.addEventListener("keydown", handleKey);
