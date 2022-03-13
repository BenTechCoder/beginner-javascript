const signUpForm = document.querySelector("[name ='signup']");

signUpForm.addEventListener("submit", function(e) {
  const name = e.currentTarget.name.value;
  if (name.includes("ben")) {
    alert("ggg bro");
    e.preventDefault();
  }
});

function logEvent(e) {
console.log(e.currentTarget.value);
}


signUpForm.name.addEventListener("keyup", logEvent)