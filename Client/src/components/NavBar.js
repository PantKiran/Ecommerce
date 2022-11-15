import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../pages/SearchBar";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Categories from "./Categories";
const NavBar = () => {

  return (
    <div>
      <div className="Nav fixed  ">
        <Nav
          className="justify-content-end"
          activeKey="/home"
          style={{ textDecoration: "none" }}
        >
          <Nav.Item>
            <Categories />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/customerCare">Customer Care</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/trackOrder">Track My Order</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
            <Link to="/cart"><ShoppingCartOutlined/></Link> 
             
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default NavBar;
