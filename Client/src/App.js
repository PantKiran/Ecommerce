import AddProduct from "./pages/addProduct";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Resgister";
// import Button from './components/Button';
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import GetProductList from "./pages/getProductList";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
import PaginationBar from "./components/Pagination";
import AddToCart from "./components/addToCart/addToCart";
import TrackOrder from "./pages/TrackOrder";

// import { ValidationSchemaExample } from './pages/formikvalidation';
const App = () => {
  return (
    <div className="container">
      {/* <AddToCart/> */}
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trackOrder" element={<TrackOrder />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<GetProductList />} />
        <Route path="/" element={<NavBar />} />
      </Routes>
    </div>
  );
};

export default App;
