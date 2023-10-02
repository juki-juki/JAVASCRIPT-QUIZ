const productProfitArray = {
    "Product A": -21,
    "Product B": 38,
    "Product C": -81,
    "Product D": -2,
    "Product E": -56,
    "Product F": -75,
  };
  
  
  
  function topProduct(productProfitArray) {
    if (Object.keys(productProfitArray).length === 0) {
      return "No Data";
    }
  
    let highestProfit = Number.NEGATIVE_INFINITY;
    let topProductName = "";
  
    for (const product in productProfitArray) {
      if (productProfitArray[product] > highestProfit) {
        highestProfit = productProfitArray[product];
        topProductName = product;
      }
    }
  
    return topProductName;
  }
  
  function bottomProduct(productProfitArray) {
    if (Object.keys(productProfitArray).length === 0) {
      return "No Data";
    }
  
    let lowestProfit = Number.POSITIVE_INFINITY;
    let bottomProductName = "";
  
    for (const product in productProfitArray) {
      if (productProfitArray[product] < lowestProfit) {
        lowestProfit = productProfitArray[product];
        bottomProductName = product;
      }
    }
  
    return bottomProductName;
  }
  
  function zeroProfitProduct(productProfitArray) {
    if (Object.keys(productProfitArray).length === 0) {
      return "No Data";
    }
  
    let closestToZeroProfit = Number.POSITIVE_INFINITY;
    let zeroProfitProductName = "";
  
    for (const product in productProfitArray) {
      const absoluteProfit = Math.abs(productProfitArray[product]);
  
      if (absoluteProfit < closestToZeroProfit || (productProfitArray[product] === 0 && absoluteProfit === closestToZeroProfit)) {
        closestToZeroProfit = absoluteProfit;
        zeroProfitProductName = product;
      }
    }
  
    return zeroProfitProductName;
  }
  

  
  
  console.log("Top Product:", topProduct(productProfitArray));
  console.log("Bottom Product:", bottomProduct(productProfitArray));
  console.log("Zero Profit Product:", zeroProfitProduct(productProfitArray));
  