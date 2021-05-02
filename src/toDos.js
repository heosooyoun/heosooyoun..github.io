// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const todoForm = document.querySelector(".js-todoInputForm"),
  todoInput = todoForm.querySelector("input"),
  pendingList = document.querySelector(".pending-list"),
  finishedList = document.querySelector(".finished-list");

const PENDING_LS = "pending";
const FINISHED_LS = "finished";

let pending = [];
let finished = [];

function moveToPending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  printPList(li.children[0].innerText);
  finishedList.removeChild(li);
  const cleanFinished = finished.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finished = cleanFinished;
  saveToDos();
}

function moveToFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  printFList(li.children[0].innerText);
  pendingList.removeChild(li);
  const cleanPending = pending.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pending = cleanPending;
  saveToDos();
}

function deletPtoDo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  pendingList.removeChild(li);

  const cleanPending = pending.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pending = cleanPending;
  saveToDos();
}

function deletFtoDo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  finishedList.removeChild(li);
  const cleanFinished = finished.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finished = cleanFinished;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

function printPList(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const checkBtn = document.createElement("button");
  const newId = pending.length + 1;

  delBtn.innerHTML = "✖";
  delBtn.addEventListener("click", deletPtoDo);
  checkBtn.innerHTML = "✔";
  checkBtn.addEventListener("click", moveToFinished);
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  pendingList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };
  pending.push(toDoObj);
  saveToDos();
}

function printFList(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const checkBtn = document.createElement("button");
  const newId = finished.length + 1;

  delBtn.innerHTML = "✖";
  delBtn.addEventListener("click", deletFtoDo);
  checkBtn.innerHTML = "◀";
  checkBtn.addEventListener("click", moveToPending);
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  finishedList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };
  finished.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  printPList(currentValue);
  todoInput.value = "";
}

function loadToDos() {
  const loadPList = localStorage.getItem(PENDING_LS);
  const loadFList = localStorage.getItem(FINISHED_LS);

  if (loadPList !== null) {
    const parsedPTodos = JSON.parse(loadPList);
    parsedPTodos.forEach(function (toDo) {
      printPList(toDo.text);
    });
  }

  if (loadFList !== null) {
    const parsedFTodos = JSON.parse(loadFList);
    parsedFTodos.forEach(function (toDo) {
      printFList(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}
init();
