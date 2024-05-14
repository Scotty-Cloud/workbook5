let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

//? Which candies costs less than $4.00?
let cheapCandy = products.filter((product) => product.price < 4.0);
console.log( `Cheap candies: ${cheapCandy.map((product) => product.product).join(", ")}`);

// //? Which candies has "M&M" its name?
let hasName = products
  .filter((product) => product.product.includes("M&Ms"))
  .map((product) => product.product);
console.log(`Candies with "M&Ms" in their name: ${hasName.join(", ")}`);

// //? Do we carry "Swedish Fish"?
let swedishFish = products.filter(product => product.product === "Swedish Fish");
if (swedishFish) {
  console.log(`Yes, we carry Swedish Fish. at the price of ${swedishFish[0].price}.`);
} else {
  console.log(`No, we do not carry Swedish Fish.`);
}