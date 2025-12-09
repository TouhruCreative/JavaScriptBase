const display = document.getElementById("display");
let expression = "";

// Разрешённые символы
const operators = ["+", "-", "*", "/"];

// Кнопки
document.querySelector(".buttons").addEventListener("click", e => {
    const key = e.target.dataset.key;
    const action = e.target.dataset.action;

    if (!key && !action) return;

    if (action === "clear") {
        expression = "";
        update();
        return;
    }

    if (action === "equals") {
        calculate();
        return;
    }

    handleInput(key);
    update();
});

// Обновление дисплея
function update() {
    display.value = expression || "0";
}

// Обработка ввода
function handleInput(key) {
    const last = expression[expression.length - 1];

    // Не позволяем два оператора подряд
    if (operators.includes(key) && operators.includes(last)) {
        return;
    }

    expression += key;
}

// СВОЙ мини-парсер: простой, но безопаснее eval
function calculate() {
    try {
        const result = Function(`"use strict"; return (${expression})`)();
        expression = String(result);
    } catch {
        expression = "Error";
    }
    update();
}
