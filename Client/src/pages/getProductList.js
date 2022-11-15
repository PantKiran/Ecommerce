import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import SubmitButton from "../components/Button";
import NavBar from "../components/NavBar";
import { Skeleton } from "antd";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import SearchBar from "./SearchBar";
import { HeartFilled } from "@ant-design/icons";
import { BsHeart } from "react-icons/bs";
import Categories from "../components/Categories";
import PaginationBar from "../components/Pagination";
import { Link, NavLink, useLinkClickHandler } from "react-router-dom";
import { addProductToCart } from "../components/addToCart/addToCart.slice";
import { useDispatch, useSelector } from "react-redux";
const GetProductList = () => {
  const [productList, setproductList] = useState([]);
  const [SearchProd, setSearchProd] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  // Getting the product list into UI
  const getProductList = async () => {
    const res = await fetch("http://localhost:3001/products/ ");
    const data = await res.json();
    setproductList(data.products);
  };

  useEffect(() => {
    getProductList();
  }, []);
  const searchedProduct = productList.filter((item) => {
    if (item.productName.includes(SearchProd)) {
      return item;
    }
  });
  const viewItem = (item) => {
    setProduct(item);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const buy = () => {};

  return (
    <>
      <NavBar />
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Modal
          title="Product Dersciption"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>product Name: {product.productName}</p>
          <p>Price Rs: {product.price}</p>
          <p>Brand Name: {product.brandName}</p>
          <p>Product Id :{product.productId}</p>
          <Button onClick={()=>dispatch(addProductToCart(product))} type="primary" style={{ margin: "5px" }}>
            Add to Cart
          </Button>
          <Button type="primary" onClick={buy}>
            Buy
          </Button>
        </Modal>
        <SearchBar onKeyUp={(e) => setSearchProd(e.target.value)} />

        <div className="">
          <h4>Just For You</h4>
          {productList.length > 0 ? (
            searchedProduct.map((item) => {
              // console.log(item)
              return (
                <a onClick={() => viewItem(item)}>
                  <Card
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
                      src={require("../productImages/" + item.filename)}
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
                </a>
              );
            })
          ) : (
            <Skeleton active />
          )}
          <PaginationBar />
        </div>
      </div>
    </>
  );
};
export default GetProductList;
