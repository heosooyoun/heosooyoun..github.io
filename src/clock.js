const clockForm = document.querySelector(".clock-form"),
  clock = clockForm.querySelector("h2");

function getTime() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  clock.innerText = `${hours < 10 ? `0${hours}` : hours}: ${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}
getTime();
