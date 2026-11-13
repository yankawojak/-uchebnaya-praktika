console.log("проверка формы подключена");

// задача 1. проверка имени
// задача 2. проверка email и пароля

const form = document.querySelector("#registration-form");
const nameinput = document.querySelector("#student-name");
const emailinput = document.querySelector("#student-email");
const passwordinput = document.querySelector("#student-password");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameinput.value.trim();
  const email = emailinput.value.trim();
  const password = passwordinput.value;

  // задача 1 проверка имени

  if (name === "") {
    result.textContent = "введите имя";
    result.className = "error";
    return;
  }

  // 1 проверка на пустой email

  if (email === "") {
    result.textContent = "введите email";
    result.className = "error";
    return;
  }

  // задача 2

  if (!email.includes("@") || !email.includes(".")) {
    result.textContent = "неверный email";
    result.className = "error";
    return;
  }

  // 2 пароль не должен состоять только из пробелов

  if (password.trim() === "") {
    result.textContent = "пароль не может состоять только из пробелов";
    result.className = "error";
    return;
  }

  // проверка длины пароля

  if (password.length < 6) {
    result.textContent = "пароль слишком короткий";
    result.className = "error";
    return;
  }

  // 3 если все данные правильные

  result.textContent = `данные проверены. привет, ${name}! ваш email: ${email}`;
  result.className = "success";
});
// задача 3

const savebtn = document.querySelector("#save-name");
const showbtn = document.querySelector("#show-name");
const deletebtn = document.querySelector("#delete-name");
const savedresult = document.querySelector("#saved-result");

// сохранить имя

savebtn.addEventListener("click", function () {
  const name = nameinput.value.trim();

  if (name === "") {
    savedresult.textContent = "сначала введите имя";
    return;
  }

  localStorage.setItem("studentname", name);
  savedresult.textContent = "имя сохранено";
});

// показать имя

showbtn.addEventListener("click", function () {
  const name = localStorage.getItem("studentname");

  if (name === null) {
    savedresult.textContent = "имя не сохранено";
  } else {
    savedresult.textContent = "ваше имя: " + name;
  }
});

// удалить имя

deletebtn.addEventListener("click", function () {
  localStorage.removeItem("studentname");
  savedresult.textContent = "имя удалено";
});


// самостоятельная работа. группа студента

const groupinput = document.querySelector('#student-group');
const savegroupbtn = document.querySelector('#save-group');
const showgroupbtn = document.querySelector('#show-group');

// сохранить группу

savegroupbtn.addEventListener('click', function () {

    const group = groupinput.value.trim();

    if (group === '') {
        savedresult.textContent = 'сначала введите название группы';
        return;
    }

    localStorage.setItem('studentGroup', group);
    savedresult.textContent = 'группа сохранена';

});

// показать группу

showgroupbtn.addEventListener('click', function () {

    const group = localStorage.getItem('studentGroup');

    if (group === null) {
        savedresult.textContent = 'группа не сохранена';
    } else {
        savedresult.textContent = 'ваша группа: ' + group;
    }

});

// задача 4.

const themebtn = document.querySelector("#theme-btn");

const theme = localStorage.getItem("theme");

if (theme === "dark") {
  document.body.classList.add("dark");
}

themebtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
