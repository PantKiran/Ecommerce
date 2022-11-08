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
  const [file, setFile] = useState();

  const handleFile = (e) => {
    setFile(e.target.files[0])
  };

  const addProduct = async () => {
    const formData = new FormData()
    formData.append("avatar", file);
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("brandName", brandName);
    formData.append("productId", productId);
    const requestOptions = {
      method: "POST",
      body:formData,
      dataType:"jsonp"
    };
    await fetch("http://localhost:3001/products/", requestOptions);
  };
  

  return (
    <div className="container mt-3 ">
      <NavBar />
      <div className="col-5" >
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
          <Form.Control type="file" name="avatar" onChange={handleFile} />
        </Form.Group>
        <SubmitButton onClick={() => addProduct()} name={"Submit"} />
      </div>
    </div>
  );
};

export default AddProduct;
