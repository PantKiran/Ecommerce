import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "./addToCart.slice";
import Card from "react-bootstrap/Card";

const AddToCart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.name);
  // console.log(cart)
  return (
    <>
    {cart.map((item)=>{
     return <Card
      className=""
      style={{
        width: "12rem",
        display: " inline-flex",
        margin: "14px",
        height: "23rem",
      }}
    >
      <Card.Img
        variant="top"
        src={item.filename }
        
        
        width="190"
        height="143"
      />
      <Card.Body>
        <Card.Title>{item.productName}</Card.Title>
        <Card.Text>price :Rs {item.price}</Card.Text>
        <Card.Text>Brand Name : {item.brandName}</Card.Text>
        <Card.Text>Product Id : {item.productId}</Card.Text>
      </Card.Body>
    </Card>
        
    })}
    </>
  );
};

export default AddToCart;
