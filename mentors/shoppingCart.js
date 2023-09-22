/**
 * Assume you are going to the supermarket, and you pick many items and put to the basket
 * Write a program that calculates the total cost of items in a shopping cart, including tax.
 * From the above question, separate total cost by category
 */

const shoppingBasket = [
  {
    itemname: 'golfculb',
    price: 300,
    category: 'golf',
  },{
    itemname: 'milk',
    price: 400,
    category: 'premium food',
  },{
    itemname: 'beef',
    price: 1000,
    category: 'premium food',
  },
];

const calculateTotalCost = (basket) => {
  /**
   * calculate total cost in basket - arrays of object with price and category
   */
  let totalCost = 0;
  const totalCostByCategory = {};
  for (let item of basket){
    totalCost += item.price;
    const itemCategory = item.category;
    if(!totalCostByCategory[itemCategory]) {
      totalCostByCategory[itemCategory] = 0;
    } 
    totalCostByCategory[itemCategory] += item.price;
  }
  console.log(`total cost is ${totalCost}`);
  console.log(totalCostByCategory);
}

calculateTotalCost(shoppingBasket);