const products = [
  { id: 1, name: "Ноутбук", category: "electronics", price: 350000, color: "black", brand: "ASUS" },
  { id: 2, name: "Телефон", category: "electronics", price: 250000, color: "white", brand: "Samsung" },
  { id: 3, name: "Кроссовки", category: "fashion", price: 50000, color: "black", brand: "Nike" },
  { id: 4, name: "Куртка", category: "fashion", price: 70000, color: "blue", brand: "Zara" },
  { id: 5, name: "Клавиатура", category: "electronics", price: 30000, color: "black", brand: "Logitech" }
];


function filterProducts(products, filters) {
  return products.filter(product => {
    for (const [key, value] of Object.entries(filters)) {

      // Отдельная обработка диапазона цен
      if (key === "priceRange") {
        const { min, max } = value;

        // Если цена товара выходит за диапазон — товар исключается
        if (product.price < min || product.price > max) {
          return false;
        }

        continue; // Переходим к следующему фильтру
      }

      // Обычная фильтрация по простым ключам
      if (product[key] !== value) {
        return false;
      }
    }

    return true;
  });
}


console.log(filterProducts(products, { category: "fashion" }));
console.log(filterProducts(products, { color: "black" }));
console.log(filterProducts(products, { brand: "ASUS" }));
console.log(filterProducts(products, { priceRange: { min: 20000, max: 80000 } }));
console.log(filterProducts(products, { category: "electronics", color: "black" }));
