/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  for(let i = 0; i < transactions.length; i++) {
    const isPresent = ans.some((val) => val.category == transactions[i].category);
    if(isPresent) {
      const obj = ans.find(val => val.category == transactions[i].category);
      obj.totalSpent = obj.totalSpent + transactions[i].price; 
    } else {
      let obj = {
        "category": transactions[i].category,
        "totalSpent": transactions[i].price
      };
      ans.push(obj);
    }
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
