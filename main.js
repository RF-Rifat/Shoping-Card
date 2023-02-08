function calculateExtraCost(numProducts) {
  if (numProducts == 1) {
    return "150 + 50 = 200";
  }
  else if (numProducts == 2) {
    return "2X150 = 300";
  }
  else if (numProducts == 3) {
    return "3X150 = 450";
  }
  else if (numProducts == 4) {
    return "4X150 = 500";
  }
  else if (numProducts == 5) {
    return "5X150 = 650";
  }
  else {
    return "Invalid input";
  }
}

// const numProducts = 1;
let numProducts = prompt("Input how many product you have buy between 1-5");
const extraCost = calculateExtraCost(numProducts);

document.write(extraCost);





