const body = document.querySelector("body");

const IMG_NUM = 3;

function paintImg(imgNumber) {
  const image = new Image();
  image.src = `src/images/${imgNumber + 1}.jpg`;
  image.classList.add("bg-image");
  body.prepend(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImg(randomNumber);
}

init();
