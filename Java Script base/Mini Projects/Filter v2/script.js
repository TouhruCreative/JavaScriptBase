const products = [
  { id: 1, name: "Ноутбук", category: "electronics", price: 350000, color: "black", brand: "ASUS" },
  { id: 2, name: "Телефон", category: "electronics", price: 250000, color: "white", brand: "Samsung" },
  { id: 3, name: "Кроссовки", category: "fashion", price: 50000, color: "black", brand: "Nike" },
  { id: 4, name: "Куртка", category: "fashion", price: 70000, color: "blue", brand: "Zara" },
  { id: 5, name: "Клавиатура", category: "electronics", price: 30000, color: "black", brand: "Logitech" }
];

// --- Расширяемая система фильтров ---
const filterHandlers = {
    default: (productValue, filterValue) => filterValue === "" || productValue === filterValue,
    priceRange: (productValue, range) => {
        const { min = 0, max = Infinity } = range;
        return productValue >= min && productValue <= max;
    }
};

// --- Функция фильтрации ---
function filterProducts(products, filters) {
    return products.filter(product => {
        return Object.entries(filters).every(([key, value]) => {
            const handler = filterHandlers[key] || filterHandlers.default;
            if (key === "priceRange") return handler(product.price, value);
            return handler(product[key], value);
        });
    });
}

// --- Вывод товаров ---
function renderProducts(products) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "<p>Товары не найдены</p>";
        return;
    }

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Категория: ${product.category}</p>
            <p>Цвет: ${product.color}</p>
            <p>Бренд: ${product.brand}</p>
            <p>Цена: ${product.price.toLocaleString()} ₽</p>
        `;
        container.appendChild(card);
    });
}

// --- Обработчики фильтров ---
function getFiltersFromUI() {
    return {
        category: document.getElementById("categoryFilter").value,
        color: document.getElementById("colorFilter").value,
        brand: document.getElementById("brandFilter").value,
        priceRange: {
            min: parseFloat(document.getElementById("priceMin").value) || 0,
            max: parseFloat(document.getElementById("priceMax").value) || Infinity
        }
    };
}

document.getElementById("applyFilters").addEventListener("click", () => {
    const filters = getFiltersFromUI();
    const filtered = filterProducts(products, filters);
    renderProducts(filtered);
});

document.getElementById("clearFilters").addEventListener("click", () => {
    document.getElementById("categoryFilter").value = "";
    document.getElementById("colorFilter").value = "";
    document.getElementById("brandFilter").value = "";
    document.getElementById("priceMin").value = "";
    document.getElementById("priceMax").value = "";
    renderProducts(products);
});

// --- Инициализация ---
renderProducts(products);
