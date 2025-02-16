import TodoApp from "./components/TodoApp";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";
import Wishlist from "./components/Wishlist";

if( !localStorage.getItem("cart") ){
  localStorage.setItem("cart",JSON.stringify ([ ]))
}

//let datafromWeb = localStorage.getItem( "cart" )

//localStorage.removeItem("cart")

function App() {
  let user = "badri";
  return (
    <div className="app">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products"element={<Products/>} /> */}
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          {/* <Route path="/login/:newUser" element={<Login/>} /> */}
          <Route path="/login/:newUser" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/NewProduct" element={<NewProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="*"element={ <NotFound/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
