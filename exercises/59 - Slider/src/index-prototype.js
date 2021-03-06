function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error("No slider passed in");
  }

  this.move = this.move.bind(this);
  this.slides = slider.querySelector(".slides");
  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");
  this.slider = slider;

  //   function handleOb(payload) {
  //   if (payload[0].isIntersecting === true) {
  // window.addEventListener("keydown", handleKeys)
  //   } if (payload[0].isIntersecting === false){

  //     window.removeEventListener("keydown", handleKeys)
  //   }
  //   }
 
  
  this.startSlider();
  this.applyClasses();
  prevButton.addEventListener("click", () => this.move("back"));
  nextButton.addEventListener("click", () => this.move());
  //TODO: add keybinding to move slidedeck but only when the user is focused on one of the decks
  // const ob = new IntersectionObserver(handleOb)
  // ob.observe(slider)

}

Slider.prototype.startSlider = function() {
  this.current =
    this.slider.querySelector(".current") || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function() {
  this.current.classList.add("current");
  this.prev.classList.add("prev");
  this.next.classList.add("next");
};

Slider.prototype.move = function(direction) {
  const classesToRemove = ["prev", "current", "next"];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);

  if (direction === "back") {
    [this.prev, this.current, this.next] = [
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};



const mySlider = new Slider(document.querySelector(".slider"));
const dogSlider = new Slider(document.querySelector(".dog-slider"));

window.dogSlider = dogSlider;
window.mySlider = mySlider;


window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowRight') {
    dogSlider.move();
  }
  if (e.key === 'ArrowLeft') {
    dogSlider.move('back');
  }
});
