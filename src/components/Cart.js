import React from "react";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const handleClearButton = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="mx-[300px]">
      <div className="flex justify-between mt-4">
        <h1 className="font-bold text-3xl ">Cart</h1>
        <button onClick={handleClearButton} className=" mt-2 font-bold border-blue-950 bg-blue-100 px-3 py-2 rounded-xl">
          Clear Cart
        </button>
      </div>
      <div>
        {(cartItems.length!==0)?(<ItemCard data={cartItems} add={false} />):(<h2 className="text-center mt-[200] text-lg">Shop something to add it here</h2>)}
        
      </div>
    </div>
  );
};

export default Cart;
