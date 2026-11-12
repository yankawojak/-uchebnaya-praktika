console.log("Скрипт подключён");

const fullName = "андреева яна";
const group = "ис-1-25";
let pagesCount = 5;
const isStudent = true;

console.log("имя: " + fullName);
console.log(`группа: ${group}, страниц на сайте: ${pagesCount}`);

pagesCount = pagesCount + 1;

console.log(`после доработки страниц: ${pagesCount}`);
console.log("студент:", isStudent);

//задача 2
console.log(typeof 42);
console.log(typeof "текст");
console.log(typeof true);
let notSet;
console.log(typeof notSet);
console.log("5" + 5);
console.log("5" - 2);
console.log(5 + 5);
console.log(Number("12") + 3);
console.log(Number("abc"));

//задача 3
const width = 12;
const height = 7;
console.log("площадь:", width * height);
console.log("периметр:", 2 * (width + height));

const mark1 = 5;
const mark2 = 4;
const mark3 = 5;
const mark4 = 4;
const mark5 = 5;
const average = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;
console.log("средний балл:", average.toFixed(2));

const totalMinutes = 195;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(`${totalMinutes} минут = ${hours} ч ${minutes} мин`);

// задача 4
const city = "  чебоксары ";
console.log(city.length);
console.log(city.trim());
console.log(city.trim().toUpperCase());

const text = "практика по веб-разработке";
console.log(text.slice(0, 8));
console.log(text.includes("веб"));

const greeting = `привет, ${fullName}! добро пожаловать на сайт.`;
console.log(greeting);

// задача 5
const number = 17;

if (number % 2 === 0) {
    console.log(number + ' – чётное');
} else {
    console.log(number + ' – нечётное');
}

if (number > 0) {
    console.log('положительное');
} else if (number < 0) {
    console.log('отрицательное');
} else {
    console.log('ноль');
}


const userNumber = Number(prompt('введите целое число'));

if (Number.isNaN(userNumber)) {
    console.log('это не число');
} else if (userNumber % 2 === 0) {
    console.log(userNumber + ' – чётное');
} else {
    console.log(userNumber + ' – нечётное');
}

//задача 6
const score = 78;
let mark;

if (score >= 90) {
    mark = 5;
} else if (score >= 75) {
    mark = 4;
} else if (score >= 60) {
    mark = 3;
} else {
    mark = 2;
}

console.log(`баллов: ${score}, оценка: ${mark}`);

// задача
const dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = 'понедельник';
        break;
    case 2:
        dayName = 'вторник';
        break;
    case 3:
        dayName = 'среда';
        break;
    case 4:
        dayName = 'четверг';
        break;
    case 5:
        dayName = 'пятница';
        break;
    case 6:
        dayName = 'суббота';
        break;
    case 7:
        dayName = 'воскресенье';
        break;
    default:
        dayName = 'такого дня нет';
}

console.log(`день ${dayNumber}: ${dayName}`);

const isWeekend = dayNumber === 6 || dayNumber === 7;
console.log('выходной:', isWeekend);

//задача 8
for (let i = 1; i <= 10; i++) {
    console.log(`7 × ${i} = ${7 * i}`);
}

const n = 5;
let sum = 0;
let k = 1;
while (k <= n) {
    sum = sum + k;
    k = k + 1;
}
console.log(`сумма чисел от 1 до ${n}: ${sum}`);

// ===== Пара 24: функции и массивы
// задача 9 

function greet(name) {
    return `привет, ${name}!`;
}

console.log(greet('анна'));
console.log(greet('пётр'));

function iseven(number) {
    return number % 2 === 0;
}

console.log(iseven(10));
console.log(iseven(7));

function test () {
    const inside = 'внутри';
    console. log(inside) ;
}
test ();
//console.log(inside);


//задача 10 
const square = (x) => x * x;
const celsiustofahrenheit = (c) => c * 9 / 5 + 32;
const addnumbers = (a, b) => a + b;

console.log(square(7));
console.log(celsiustofahrenheit(20));
console.log(addnumbers(2, 3));

// задача 11

const subjects = ['математика', 'информатика', 'физика'];
console.log(subjects.length);
console.log(subjects[0]);
console.log(subjects[subjects.length - 1]);

subjects.push('история');
console.log(subjects);
const removed = subjects.pop();
console.log('удалили:', removed);

for (const subject of subjects) {
  console.log('предмет: ' + subject);
}

const grades =[5,4,3,5,4];

function getAverage(list) {
  let total = 0;
  for (const value of list) {
    total += value;
  }
  return total / list.length;
}
console.log('средняя оценка:', getAverage(grades).toFixed(2));

let best = grades[0];
for (const value of grades) {
  if (value > best) {
    best = value;
  }
}
console.log('лучшая оценка:', best);

//задача 12 
const numbers =[3, 8, 12, 5, 20, 1 ];
const doubled = numbers.map((x) => x * 2);
const big = numbers.filter((x) => x > 5);
console.log(doubled);
console.log(big);
console.log(numbers);

const names = ['анна', 'борис', 'алексей', 'вера'];
const startswitha = names.filter((item) => item.startsWith('а'));
console.log(startswitha.join(', '));
const uppernames = names.map((item) => item.toUpperCase());
console.log(uppernames);

//самостоятельная часть пары 24

function analyzegrades(list) {
    const avg = getAverage(list);
    const best = Math.max(...list);
    const worst = Math.min(...list);
    const twos = list.filter((grade) => grade === 2);
  
    console.log('количество оценок:', list.length);
    console.log('средний балл:', avg.toFixed(2));
    console.log('лучшая оценка:', best);
    console.log('худшая оценка:', worst);
  
    if (avg >= 3.5 && twos.length === 0) {
      console.log('итог: зачёт');
    } else {
      console.log('итог: незачёт');
    }
  }
  
  analyzegrades([5, 4, 5, 4, 5]);
  analyzegrades([3, 2, 4, 3, 3]);
  