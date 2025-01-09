type _Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

const sampleProducts: _Product[] = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "Phone", category: "Electronics", price: 500 },
  { id: 3, name: "Shirt", category: "Apparel", price: 50 },
  { id: 4, name: "Shoes", category: "Apparel", price: 80 },
  { id: 5, name: "Watch", category: "Accessories", price: 200 },
];

function getProductsByCategory(
  products: _Product[],
  category: string
): _Product[] {
  return products.filter((products) => products.category === category);

  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
   */
}

function findProductById(products: _Product[], id: number): _Product[] {
  const findProduct = products.find((products) => products.id === id);

  if (products) {
    return products;
  }
  throw new Error("product tidak ditemukan");

  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
   */
}

function calculateTotalPrice(products: _Product[]): number {
  return products.reduce((total, products) => products.price + total, 0);

  /**
   * TODO:
   * Gunakan metode array immutable untuk menghitung total harga semua produk.
   */
}

function applyDiscount(products: _Product[], discount: number): _Product[] {
  const newDiscountProduct = products.map((products) => ({
    ...products,
    price: products.price - products.price * (discount / 100),
  }));

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
