import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { sumItems } from "./CartReducer";

//Local Storage
const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const CartState = ({ children }) => {
   //gets the initial state from local storage
  const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
  };

  // reducer set up
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // function to handle add to the cart
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  // function to handle item increment in the cart
  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  // function to handle item decrement in the cart
  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  // function to remove an item from the cart
  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  // function to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  // function to handle checkout button click
  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    // add defined functions above into Context provider, and pass on to children
    <CartContext.Provider value={{
      showCart: state.showCart,
      cartItems: state.cartItems,
      addToCart,
      increase,
      decrease,
      removeFromCart,
      clearCart,
      handleCheckout,
      // To access the total, we need to pass in the state
      ...state,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;