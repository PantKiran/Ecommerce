import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "./addToCart.slice";

const AddToCart = () => {
  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.count);

  const add = () => {
    dispatch(addProductToCart());
  };
  return (
    <>
      <div>{count}</div>

      <button onClick={add}>AddToCart</button>
    </>
  );
};

export default AddToCart;
