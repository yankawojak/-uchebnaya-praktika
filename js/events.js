// задача 1
const hellobtn = document.querySelector('#hello-btn');
const helloresult = document.querySelector('#hello-result');

hellobtn.addEventListener('click', function () {
  helloresult.textContent = 'кнопка нажата!';
});

// задача 2

let count = 0;

const counter = document.querySelector('#counter');
const plusbtn = document.querySelector('#plus-btn');
const minusbtn = document.querySelector('#minus-btn');
const resetbtn = document.querySelector('#reset-btn');

plusbtn.addEventListener('click', function () {
  count = count + 1;
  counter.textContent = count;
});

minusbtn.addEventListener('click', function () {
  count = count - 1;
  counter.textContent = count;
});

resetbtn.addEventListener('click', function () {
  count = 0;
  counter.textContent = count;
});

//задача 3
const nameinput = document.querySelector('#name-input');
const nameresult = document.querySelector('#name-result');

nameinput.addEventListener('input', function () {
  const username = nameinput.value.trim();

  if (username === '') {
    nameresult.textContent = 'введите ваше имя';
  } else {
    nameresult.textContent = `привет, ${username}!`;
  }
});

//  заданеи 4
const colorbox = document.querySelector('#color-box');
const colorbtn = document.querySelector('#color-btn');
const colorstatus = document.querySelector('#color-status');

let isblue = false;

colorbtn.addEventListener('click', function () {
  if (isblue === false) {
    colorbox.style.backgroundColor = 'lightblue';
    colorstatus.textContent = 'цвет включен';
    isblue = true;
  } else {
    colorbox.style.backgroundColor = 'white';
    colorstatus.textContent = 'цвет выключен';
    isblue = false;
  }
});

//задание 5 
const feedbackform = document.querySelector('#feedback-form');
const feedbackname = document.querySelector('#feedback-name');
const formresult = document.querySelector('#form-result');

feedbackform.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = feedbackname.value.trim();
  const task3name = nameinput.value.trim();

  if (username === '') {
    formresult.textContent = 'ошибка: введите имя';
    formresult.style.color = 'red';
  } else if (username !== task3name) {
    formresult.textContent = 'ошибка: имя не совпадает';
    formresult.style.color = 'red';
  } else {
    formresult.textContent = `спасибо, ${username}! данные проверены.`;
    formresult.style.color = 'green';
  }
});

