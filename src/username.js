const nameForm = document.querySelector(".username-form"),
  nameInput = nameForm.querySelector("input"),
  printName = document.querySelector(".print-username");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function showingName(text) {
  nameForm.classList.remove(SHOWING_CN);
  printName.classList.add(SHOWING_CN);
  printName.innerText = `Hello ${text}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = nameInput.value;
  showingName(currentValue);
  saveName(currentValue);
}

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  nameForm.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    askForName();
  } else {
    showingName(currentUser);
  }
}

function init() {
  loadName();
}

init();

// const form = document.querySelector(".js-form"),
//   input = form.querySelector("input"),
//   greeting = document.querySelector(".js-greetings");

// const USER_LS = "currentUser",
//   SHOWING_CN = "showing";

// function saveName(text) {
//   localStorage.setItem(USER_LS, text);
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const currentValue = input.value;
//   paintGreeting(currentValue);
//   saveName(currentValue);
// }

// function askForName() {
//   form.classList.add(SHOWING_CN);
//   form.addEventListener("submit", handleSubmit);
// }

// function paintGreeting(text) {
//   form.classList.remove(SHOWING_CN);
//   greeting.classList.add(SHOWING_CN);
//   greeting.innerText = `Hello ${text}`;
// }

// function loadName() {
//   const currentUser = localStorage.getItem(USER_LS);

//   if (currentUser === null) {
//     askForName();
//   } else {
//     paintGreeting(currentUser);
//   }
// }

// function init() {
//   loadName();
// }

// init();
