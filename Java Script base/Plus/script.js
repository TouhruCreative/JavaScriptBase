///////////////////////
// 1. Деструктуризация массивов
const numbers = [10, 20, 30];

const [a, b, c] = numbers;
console.log(a, b, c); // 10 20 30

const [first, , third] = numbers;

///////////////////////
// 2. Деструктуризация объектов
const user = { name: "Alex", age: 22 };

const { name, age } = user;
console.log(name, age);
const { name: username } = user;

///////////////////////
// 3. Spread оператор (...)
const arr1 = [1, 2];
const arr2 = [3, 4];

const all = [...arr1, ...arr2]; 
// [1, 2, 3, 4]

const obj1 = {a:1};
const obj2 = {b:2};

const merged = {...obj1, ...obj2}; 
///////////////////////
// 4. Rest оператор
function sum(...nums) {
    return nums.reduce((a, b) => a + b);
}

sum(1,2,3,4); // 10
 const [a1, ...others] = [1,2,3,4];
// a = 1; others = [2,3,4]

///////////////////////
// 5. Callback
function greet(name, callback) {
    callback(`Привет, ${name}!`);
}

greet("Alex", (msg) => {
    console.log(msg);
});

///////////////////////
// 6. Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Готово!"), 1000);
});

promise.then(result => console.log(result));


///////////////////////
// 7. Async
async function getData() {
    const result = await promise; 
    console.log(result);
}

getData();

///////////////////////
// 8. fecth
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => console.log(data));//console.log -> "Готово!"

async function load() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
}
load();//console.log -> "Готово!"

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Hello" })
});
