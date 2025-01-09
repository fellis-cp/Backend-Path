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

function getProductsByCategory(products: _Product[], category: string) {
  return products.filter((products) => products.category === category);
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
   */
}

function findProductById(products: _Product[], id: number) {
  return products.filter((products) => products.id === id);
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
   */
}

console.log(getProductsByCategory(sampleProducts, "Electronics")); // Should return products with id 1 and 2
