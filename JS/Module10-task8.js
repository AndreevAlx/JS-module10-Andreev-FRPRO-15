let fruits = new Map([
  ["apple", "green"],
  ["strawberry", "red"],
  ["blueberry", "blue"]
]);
fruits.forEach((key) => {
  console.log(`${key} - x`);
});
fruits.forEach((value) => {
  console.log(` ${value} - y`);
});
