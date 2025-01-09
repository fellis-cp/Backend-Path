var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var sampleProducts = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "Phone", category: "Electronics", price: 500 },
    { id: 3, name: "Shirt", category: "Apparel", price: 50 },
    { id: 4, name: "Shoes", category: "Apparel", price: 80 },
    { id: 5, name: "Watch", category: "Accessories", price: 200 },
];
function getProductsByCategory(products, category) {
    return products.filter(function (products) { return products.category === category; });
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
     */
}
function findProductById(products, id) {
    var findProduct = products.find(function (products) { return products.id === id; });
    if (products) {
        return products;
    }
    throw new Error("product tidak ditemukan");
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
     */
}
function calculateTotalPrice(products) {
    return products.reduce(function (total, products) { return products.price + total; }, 0);
    /**
     * TODO:
     * Gunakan metode array immutable untuk menghitung total harga semua produk.
     */
}
function applyDiscount(products, discount) {
    var newDiscountProduct = products.map(function (products) { return (__assign(__assign({}, products), { price: products.price - products.price * (discount / 100) })); });
    return newDiscountProduct;
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan array baru,
     * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
     */
}
console.log(getProductsByCategory(sampleProducts, "Electronics")); // Should return products with id 1 and 2
console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3
