export const priceWithDiscount = (
  price,
  discountPrecentage,
  decimalPlaces = 2
) => {
  const discountAmount = (price * (discountPrecentage / 100)).toFixed(
    decimalPlaces
  );

  return (price - discountAmount).toFixed(decimalPlaces);
};
