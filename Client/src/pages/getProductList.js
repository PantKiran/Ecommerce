import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import SubmitButton from "../components/Button";
import NavBar from "../components/NavBar";
import { Skeleton } from "antd";
import "antd/dist/antd.css";
import SearchBar from "./SearchBar";
import { HeartFilled } from "@ant-design/icons";
import { BsHeart } from "react-icons/bs";
import Categories from "../components/Categories";
import PaginationBar from "../components/Pagination";

const GetProductList = () => {
  const [productList, setproductList] = useState([]);
  const [SearchProd, setSearchProd] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouriteCount, setFavouriteCount] = useState(0);

  // Getting the product list into UI
  const getProductList = async () => {
    const res = await fetch("http://localhost:3001/productList");
    const data = await res.json();
    setproductList(data.productList);
  };

  useEffect(() => {
    getProductList();
  }, []);

  // toggle the favourite button from database
  const setFavourite=async()=>{
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({isFavourite:productList.isFavourite}),
    };
    const response= await fetch("http://localhost:3001/productList", requestOptions)
    if(response){
      productList()
    }
   }

  const searchedProduct = productList.filter((item) => {
    if (item.productName.includes(SearchProd)) {
      return item;
    }
  });

  return (
    <div>
      <NavBar />
      <Categories />

      <SearchBar onKeyUp={(e) => setSearchProd(e.target.value)} />
      <div className="">
        <h4>Just For You</h4>
        {productList.length > 0 ? (
          searchedProduct.map((item) => {
            return (
              <Card
                className=""
                style={{
                  width: "14rem",
                  display: " inline-flex",
                  margin: "12px",
                }}
              >
                <Card.Img variant="top" src="https://i.imgur.com/A8eQsll.jpg" />
                <Card.Body>
                  <Card.Title>{item.productName}</Card.Title>
                  <Card.Text>price :Rs {item.price}</Card.Text>
                  <Card.Text>Brand Name : {item.brandName}</Card.Text>
                  <Card.Text>Product Id : {item.productId}</Card.Text>
                </Card.Body>
                <div
                  onClick={() => setFavourite()
                  //   if (isFavourite === true) {
                  //     setFavouriteCount(0);
                  //     setIsFavourite(false);
                  //   } else {
                  //     setFavouriteCount(1);
                  //     setIsFavourite(true);
                  //   }
                  }
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
                </div>
              </Card>
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
