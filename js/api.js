console.log("работа с api подключена");

// задача 1
const student = {
  name: "яна",
  group: "ис-1-25",
  age: 17,
  city: "чебоксары",
  subjects: ["html", "css", "javascript", "php"],
};

console.log(student);
console.log(student.name);
console.log(student.subjects);

const jsontext = JSON.stringify(student);
console.log("json:", jsontext);

const restoredstudent = JSON.parse(jsontext);
console.log("после преобразования:", restoredstudent);

const jsonresult = document.querySelector("#json-result");
jsonresult.textContent = `студент: ${restoredstudent.name}, группа: ${restoredstudent.group}, город: ${restoredstudent.city}, количество предметов: ${restoredstudent.subjects.length}`;

// задача 2

const loadpostbtn = document.querySelector("#load-post");
const postresult = document.querySelector("#post-result");

loadpostbtn.addEventListener("click", function () {
  postresult.textContent = "загрузка...";

  fetch(
    'data:application/json;charset=utf-8,{"id":1,"title":"пример заголовка записи с сервера"}'
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("ошибка http: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      postresult.textContent = `заголовок записи: ${data.title}`;
      console.log(data);
    })
    .catch((error) => {
      postresult.textContent = "ошибка загрузки данных";
      console.error(error);
    });
});

// задача 3

const loadusersbtn = document.querySelector("#load-users");
const usersresult = document.querySelector("#users-result");

loadusersbtn.addEventListener("click", function () {
  usersresult.textContent = "загрузка пользователей...";

  fetch(
    'data:application/json;charset=utf-8,[{"name":"иван иванов","email":"ivan@example.com","phone":"+7 (900) 111-22-33","address":{"city":"чебоксары"}},{"name":"анна петрова","email":"anna@example.com","phone":"+7 (900) 444-55-66","address":{"city":"казань"}},{"name":"сергей смирнов","email":"sergey@example.com","phone":"+7 (900) 777-88-99","address":{"city":"москва"}}]'
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("ошибка http: " + response.status);
      }
      return response.json();
    })
    .then((users) => {
      usersresult.textContent = "";

      const count = document.createElement("p");
      count.textContent = `всего пользователей: ${users.length}`;
      usersresult.prepend(count);

      for (const user of users) {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.textContent = user.name;
        title.style.color = "#1a56db";

        const email = document.createElement("p");
        email.textContent = `email: ${user.email}`;

        const phone = document.createElement("p");
        phone.textContent = `телефон: ${user.phone}`;

        const city = document.createElement("p");
        city.textContent = `город: ${user.address.city}`;

        card.append(title, email, phone, city);
        usersresult.append(card);
      }
    })
    .catch((error) => {
      usersresult.textContent = "не удалось загрузить пользователей";
      usersresult.className = "error";
      console.error(error);
    });
});

// задача 4
const loadproductsbtn = document.querySelector("#load-products");
const productsresult = document.querySelector("#products-result");

loadproductsbtn.addEventListener("click", function () {
  productsresult.textContent = "загрузка товаров...";

  fetch(
    'data:application/json;charset=utf-8,{"products":[{"title":"ноутбук","price":899,"description":"мощный ноутбук для учёбы и работы","rating":4.8,"category":"электроника","thumbnail":"img/Новая папка/notebook.jpg"},{"title":"смартфон","price":499,"description":"современный смартфон с ярким экраном","rating":4.6,"category":"гаджеты","thumbnail":"img/Новая папка/moble phone.jpg"},{"title":"клавиатура","price":59,"description":"механическая клавиатура с подсветкой","rating":4.5,"category":"периферия","thumbnail":"img/Новая папка/keyboard.jpg"},{"title":"мышь defender trigger","price":29,"description":"удобная игровая оптическая мышь","rating":4.4,"category":"периферия","thumbnail":"img/Новая папка/defender trigger mouse.jpg"},{"title":"монитор","price":249,"description":"широкоформатный монитор для компьютера","rating":4.9,"category":"электроника","thumbnail":"img/Новая папка/monitor.jpg"}]}'
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("ошибка http: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      productsresult.textContent = "";

      for (const product of data.products) {
        const card = document.createElement("div");
        card.className = "card";

        const image = document.createElement("img");
        image.src = product.thumbnail;
        image.alt = product.title;
        image.width = 150;

        const title = document.createElement("h3");
        title.textContent = product.title;

        const category = document.createElement("p");
        category.textContent = `категория: ${product.category}`;

        const description = document.createElement("p");
        description.textContent = product.description;

        const rating = document.createElement("p");
        rating.textContent = `рейтинг: ${product.rating}`;

        const price = document.createElement("p");
        price.textContent = `цена: $${product.price}`;

        card.append(image, title, category, description, rating, price);
        productsresult.append(card);
      }
    })
    .catch((error) => {
      productsresult.textContent = "не удалось загрузить каталог";
      console.error(error);
    });
});
