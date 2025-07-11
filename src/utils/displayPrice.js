const displayPrice = (num) => {
  return num.toFixed(2).replace(".", ",") + " €";
};

export default displayPrice;
