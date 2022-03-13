function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error("No slider passed in");
  }
  let prev;
  let current;
  let next;
  const slides = slider.querySelector(".slides");
  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");

  function startSlider() {
    current = slider.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }

  function move(direction) {
    const classesToRemove = ["prev", "current", "next"];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === "back") {
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }

  function handleKeys(e) {
    
    if (e.key === "ArrowRight") {
      move();
    }

    if (e.key === "ArrowLeft") {
      move("back");
    }
  }

//   function handleOb(payload) {
//   if (payload[0].isIntersecting === true) {
// window.addEventListener("keydown", handleKeys)
//   } if (payload[0].isIntersecting === false){

//     window.removeEventListener("keydown", handleKeys)
//   }
//   }

  function handleFocus() {
    window.addEventListener("keydown", handleKeys)
  }

  function handleBlur() {
    window.removeEventListener("keydown", handleKeys)
  }

  startSlider();
  applyClasses();
  prevButton.addEventListener("click", () => move("back"));
  nextButton.addEventListener("click", move);
  //TODO: add keybinding to move slidedeck but only when the user is focused on one of the decks
// const ob = new IntersectionObserver(handleOb)
// ob.observe(slider)

slider.addEventListener("focus", handleFocus)

slider.addEventListener("blur", handleBlur)

}
const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));
