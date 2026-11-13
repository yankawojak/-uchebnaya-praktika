console.log("Интерактивная страница подключена");
const container = document.querySelector("#container");

const newparagraph = document.createElement("p");
newparagraph.textContent = "этот абзац создан с помощью javascript";
container.append(newparagraph);

const infoparagraph = document.createElement("p");

infoparagraph.textContent = "андреева яна, группа ис-21";
container.append(infoparagraph);

const heading = document.createElement("h3");
heading.textContent = "мои навыки";

heading.style.color = "blue";

container.append(heading);

// задача 2. список дел

const taskinput = document.querySelector("#task-input");
const addtaskbtn = document.querySelector("#add-task");
const tasklist = document.querySelector("#task-list");

addtaskbtn.addEventListener("click", function () {
  const tasktext = taskinput.value.trim();

  if (tasktext === "") {
    alert("введите название задачи");
    return;
  }

  const li = document.createElement("li");
  li.textContent = tasktext + " ";

  // «выполнено»
  const donebtn = document.createElement("button");
  donebtn.textContent = "выполнено";

  // 2 и 3 класс completed
  donebtn.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "удалить";

  deletebtn.addEventListener("click", function () {
    li.remove();
  });

  li.append(donebtn);
  li.append(deletebtn);
  tasklist.append(li);

  taskinput.value = "";
});

//задача 3

const questions = document.querySelectorAll(".question");

for (const question of questions) {
  question.addEventListener("click", function () {
    const answer = question.nextElementSibling;

    answer.classList.toggle("open");
  });
}

// задача 4. слайдер
const images = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg", "img/cat4.jpg"];

let currentslide = 0;

const sliderimage = document.querySelector("#slider-image");

const slidenumber = document.querySelector("#slide-number");

const nextbtn = document.querySelector("#next-slide");

const prevbtn = document.querySelector("#prev-slide");

function showslide() {
  sliderimage.src = images[currentslide];

  slidenumber.textContent = `слайд ${currentslide + 1} из ${
    images.length
  }`;
}

nextbtn.addEventListener("click", function () {
  currentslide++;

  if (currentslide >= images.length) {
    currentslide = 0;
  }

  showslide();
});

prevbtn.addEventListener("click", function () {
  currentslide--;

  if (currentslide < 0) {
    currentslide = images.length - 1;
  }

  showslide();
});

showslide();
