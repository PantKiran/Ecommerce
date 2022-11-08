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
import GetModal from "../components/Modal";



const GetProductList = () => {
  const [productList, setproductList] = useState([]);
  const [SearchProd, setSearchProd] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // const [favouriteCount, setFavouriteCount] = useState(0);

  // Getting the product list into UI
  const getProductList = async () => {
    const res = await fetch("http://localhost:3001/products");
    const data = await res.json();
    setproductList(data.products);
  };

  useEffect(() => {
    getProductList();
  }, []);

  // toggle the favourite button from database
  const setFavourite = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isFavourite: productList.isFavourite }),
    };
    const response = await fetch(
      "http://localhost:3001/products",
      requestOptions
    );
    if (response) {
      productList();
    }
  };

  const searchedProduct = productList.filter((item) => {
    if (item.productName.includes(SearchProd)) {
      return item;
    }
  });
  const viewItem = () => {
    setIsModalOpen(true)
  };

  return (
    <div>
      <NavBar />
      <Categories />
      <GetModal/>
      <Modal title="Basic Modal" open={isModalOpen} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <SearchBar onKeyUp={(e) => setSearchProd(e.target.value)} />

      <div className="">
        <h4>Just For You</h4>
       
        {productList.length > 0 ? (
          searchedProduct.map((item) => {
            console.log(item)
            return (
               <a onClick={()=>viewItem()}>
                <Card
                  className=""
                  style={{
                    width: "12rem",
                    display: " inline-flex",
                    margin: "14px",
                  }}
                >
                  {/* require('../productImages'+item.filePath) */}
                  <Card.Img variant="top" src={require('../productImages/'+item.filename) } />
                  <Card.Body>
                    <Card.Title>{item.productName}</Card.Title>
                    <Card.Text>price :Rs {item.price}</Card.Text>
                    <Card.Text>Brand Name : {item.brandName}</Card.Text>
                    <Card.Text>Product Id : {item.productId}</Card.Text>
                  </Card.Body>
                  {/* <div
                  onClick={() => setFavourite()}
                  style={{ paddingLeft: "200px" }}
                >
                  {" "}
                  {favouriteCount}
                  <a>
                    <BsHeart
                      style={{
                        color: item.isFavourite === true ? "red" : null,
                      }}
                    />
                  </a>
                </div> */}
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
  );
};
export default GetProductList;
