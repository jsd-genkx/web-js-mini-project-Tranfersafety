let categories = [
  { categoryId: 1, categoryName: "Fruits" },
  { categoryId: 2, categoryName: "Beverages" },
  { categoryId: 3, categoryName: "Vegetables" },
  { categoryId: 4, categoryName: "Dairy" },
  { categoryId: 5, categoryName: "Bakery" },
  { categoryId: 6, categoryName: "Snacks" },
  { categoryId: 7, categoryName: "Meat" },
];

let inventory = [
  { productId: 1, productName: "Apple", category: 1, price: 0.99, stock: 150 },
  {
    productId: 2,
    productName: "Orange Juice",
    category: 2,
    price: 3.49,
    stock: 40,
  },
  { productId: 3, productName: "Banana", category: 1, price: 0.69, stock: 200 },
  { productId: 4, productName: "Carrot", category: 3, price: 0.49, stock: 100 },
  { productId: 5, productName: "Milk", category: 4, price: 1.99, stock: 60 },
  { productId: 6, productName: "Bread", category: 5, price: 2.49, stock: 80 },
  { productId: 7, productName: "Chips", category: 6, price: 1.29, stock: 120 },
  {
    productId: 8,
    productName: "Chicken Breast",
    category: 7,
    price: 5.99,
    stock: 50,
  },
  { productId: 9, productName: "Grapes", category: 1, price: 2.99, stock: 90 },
  { productId: 10, productName: "Soda", category: 2, price: 1.49, stock: 75 },
];

inventory.push({
  productId: 11,
  productName: "Pepsi",
  category: 2,
  price: 2,
  stock: 60,
});

const pushProduct = (id, name, cat, pc, st) => {
  let haveId = inventory.filter((item) => id === item.productId);
  if (haveId.length == 0) {
    inventory.push({
      productId: id,
      productName: name,
      category: cat,
      price: pc,
      stock: st,
    });
  } else {
    return console.log("Dup ID");
  }
};

pushProduct(20, "aa", 1, 12, 15);
console.log(inventory);

const findingProduct = (name) => {
  let findName = inventory.filter((item) => item.productName == name);
  if (findName.length == 0) {
    console.log("Your product doesn't exist");
  } else {
    console.log(findName);
  }
};

findingProduct("Carrot");

const updateStock = (id, stockAdd) => {
  let updateItem = inventory.find((item) => item.productId == id);
  console.log(updateItem);
  if (updateItem == undefined) {
    return console.log("Wrong ID");
  }
  console.log(
    `Your item is ${updateItem.productName} and have ${updateItem.stock}`
  );
  updateItem.stock += stockAdd;
  console.log(`Now they have ${updateItem.stock}`);
};

updateStock("dd", 20);
console.log(inventory);
const deleteProduct = (id) => {
  let productIndex = inventory.findIndex((item) => item.productId === id);
  inventory.splice(productIndex, 1);
  console.log(inventory);
};

deleteProduct(9);
