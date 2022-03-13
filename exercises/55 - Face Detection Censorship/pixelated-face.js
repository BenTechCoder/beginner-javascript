// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.

const video = document.querySelector(".webcam");
let canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d");
const faceCanvas = document.querySelector(".face");
const faceCtx = faceCanvas.getContext("2d");
const faceDetector = new window.FaceDetector();
let options = {
  SCALE: 1.5,
  SIZE: 10,
};
const optionsInputs = document.querySelectorAll('.controls input[type = "range"]')

function handleOption(e) {
    const { value, name } = e.currentTarget;
    options[name] = parseFloat(value);
}

optionsInputs.forEach(input => {
    input.addEventListener("input", handleOption)
})

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#ffc600";
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, height, width);
}

async function detect() {
  const faces = await faceDetector.detect(video);
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

function censor({ boundingBox: face }) {
  faceCanvas.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  //draw small face
  faceCtx.drawImage(
    // 5 source args
    video, // where does the source come from?
    face.x, // where do we start the source pull from?
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x, // where should we start drawing the x and y?
    face.y,
    options.SIZE,
    options.SIZE,
  );
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;

  faceCtx.drawImage(
    faceCanvas,
    face.x, // where do we start the source pull from?
    face.y,
    options.SIZE,
    options.SIZE,
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}

populateVideo().then(detect);
