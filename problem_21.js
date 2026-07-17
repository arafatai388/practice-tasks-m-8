/*
Build a simple discount system: if cart total is above 1000 AND the user is a member,
 apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount —
  use logical operators combined with if-else if.
  */

  const cartTotal = 1500;
const isMember = true;

if (cartTotal > 1000 && isMember) {
    const discount = cartTotal * 0.20;
    const finalPrice = cartTotal - discount;

    console.log("20% Discount Applied");
    console.log("Final Price:", finalPrice);

} else if (cartTotal > 1000) {
    const discount = cartTotal * 0.10;
    const finalPrice = cartTotal - discount;

    console.log("10% Discount Applied");
    console.log("Final Price:", finalPrice);

} else {
    console.log("No Discount");
    console.log("Final Price:", cartTotal);
}
