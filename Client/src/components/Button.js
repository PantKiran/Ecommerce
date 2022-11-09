import React from "react";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const SubmitButton = (props) => {
  //   const [productList, setproductList] = useState([]);

  //     const getProductList = async()=>{
  //         const res = await fetch("http://localhost:3000/productList");
  //         const data = await res.json();
  //         setproductList(data.users)
  //      }

  //     useEffect(()=>{
  //        getProductList()
  //     },[])

  // const submitProduct = async () => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({}),
  //   };
  //   await fetch("http://localhost:3000/addProduct/", requestOptions);
  // };
  return (
    <div>
      <div className="btn-group">
        <Button type="submit" onClick={props.onClick} className="primary">
          {props.name}
        </Button>
      </div>
    </div>
  );
};

export default SubmitButton;
