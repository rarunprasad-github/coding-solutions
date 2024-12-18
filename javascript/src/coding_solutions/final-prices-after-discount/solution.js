/**
 * @param {number[]} prices
 * @return {number[]}
 */
/*
*
* */
var finalPrices = function(prices) {
  const result = prices;
  const itemsNotDiscounted = [0];
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    while(itemsNotDiscounted.length > 0) {
      const lastItem = itemsNotDiscounted.pop();
      if (price <= prices[lastItem]) {
        result[lastItem] = result[lastItem] - price;
      } else {
        itemsNotDiscounted.push(lastItem)
      }
    }
    itemsNotDiscounted.push(i)
  }
  return result;
};