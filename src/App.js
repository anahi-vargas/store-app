
import { useState, useEffect } from "react";
import CategoryList from "./components/products/CategoryList";
import NavBar from "./components/NavBar";
import ProductList from "./components/products/ProductList";
import { getAllProducts, getAllCategories } from "./utils"
import "./index.css"
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setLoading] = useState(true)

  // useEffect( () => {
  //   getAllProducts().then(data => {
  //     setProducts(data);
  //     setLoading(false);
  //   })
  //   getAllCategories().then(data => {
  //     setCategories(data)
  //   })

  // }, [])

  return (
    <div className="App">
      <NavBar />
      <Outlet />
      {/* <CheckoutForm /> */}
      {/* { !isLoading && 
      <>
        <CategoryList categories={categories} />
        <ProductList products={products} />
      
      </>
    }
    <CheckoutFrom/> */}
    </div>
  );
}

export default App;
