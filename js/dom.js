console.log("dom подключен");

const maintitle = document.querySelector("#main-title");
maintitle.textContent = "практическая работа — андреева яна";

const message = document.querySelector("#message");
message.textContent = "теперь я умею менять содержимое страницы!";

const mainstudent = document.querySelector("#main-student");
mainstudent.textContent = "ис-1-25";

console.log(maintitle.textContent);

// задача 2
const studentname = "андреева яна";
const studentgroup = "ис-1-25";
const studentage = 17;
const studentlang = "javascript";

document.querySelector(
  "#student-name"
).textContent = `студент: ${studentname}.`;
document.querySelector(
  "#student-group"
).textContent = `группа: ${studentgroup}`;
document.querySelector("#student-age").textContent = `возраст: ${studentage}`;
document.querySelector(
  "#student-lang"
).textContent = `любимый язык программирования: ${studentlang}`;

// задача  3
const productcard = document.querySelector("#product-card");
const productname = document.querySelector("#product-name");
const productprice = document.querySelector("#product-price");

productcard.style.backgroundColor = "#f0e6ff";
productcard.style.padding = "25px";
productcard.style.width = "300px";

productname.style.color = "blue";
productprice.style.fontSize = "24px";

//  задача 4
const items = document.querySelectorAll("#subjects li");

console.log("количество предметов:", items.length);

for (const item of items) {
  item.style.color = "darkblue";
  item.style.fontSize = "20px";
}

//  задача 5
const statustext = document.querySelector("#status");

statustext.classList.add("success");
statustext.textContent = "статус: выполнено";
