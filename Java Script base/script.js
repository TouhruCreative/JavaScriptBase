console.log("JS из файла работает!");

// const title = document.getElementById("work");
// title.textContent = "Заголовок изменён через JS!";

let age1 = 25; //изменяется
age1 = 26;

const name1 = "Alex"; //не изменяется

const numbers = [1, 2, 3, 4, 5];

// map — новый массив
const doubled = numbers.map(n => n * 2); // [2,4,6,8,10]

// filter — только те, что проходят условие
const even = numbers.filter(n => n % 2 === 0); // [2,4]

// reduce — сводит к одному значению
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// forEach — перебирает, но не возвращает
numbers.forEach(n => console.log(n * 2));

const person = { name: "Alex", age: 25, city: "Almaty" };
const { name, age } = person;
console.log(name, age); // Alex 25

function greet(name) {
  return `Hello, ${name}!`;
}

const greetArrow = name => `Hello, ${name}!`;

console.log(greet("Alex"));       // Hello, Alex!
console.log(greetArrow("Alex"));  // Hello, Alex!

// Получение элементов
const title = document.getElementById("work");
const items = document.querySelectorAll(".item");

// Изменение текста
title.textContent = "Новый заголовок";

// События
title.addEventListener("click", () => {
  alert("Кликнули по заголовку!");
});
