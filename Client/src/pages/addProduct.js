import React from "react";
import Form from "react-bootstrap/Form";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
import SubmitButton from "../components/Button";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

const AddProduct = () => {
  const [productName, setProductName] = useState([]);
  const [price, setPrice] = useState([]);
  const [brandName, setbrandName] = useState([]);
  const [productId, setproductId] = useState([]);

  const addProduct =async()=>{
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({productName:productName,price:price,brandName:brandName,productId:productId,isFavourite:false}),
      };
      await fetch("http://localhost:3001/products/", requestOptions);
  };

  return (
    <div className="container mt-3 ">
      {/* <NavBar /> */}
      <div className="col-5 ">
        <InputGroup
          onKeyUp={(e) => setProductName(e.target.value)}
          className="mb-3 "
        >
          <Form.Control
            placeholder="Product Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup onKeyUp={(e) => setPrice(e.target.value)} className="mb-3 ">
          <Form.Control
            placeholder="Price"
            aria-label="Price"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup
          onKeyUp={(e) => setbrandName(e.target.value)}
          className="mb-3 "
        >
          <Form.Control
            placeholder="Brand Name"
            aria-label="BrandName"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup
          onKeyUp={(e) => setproductId(e.target.value)}
          className="mb-3 "
        >
          <Form.Control
            placeholder="Product Id"
            aria-label="Product Id"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>
        <SubmitButton onClick={() => addProduct()} name={"Submit"} />
      </div>
    </div>
  );
};

export default AddProduct;
