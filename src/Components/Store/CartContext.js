import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  Additem: (item) => {},
  removeItem: (id) => {},
});
export default CartContext;
