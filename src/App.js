import "./Styles/main.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AllProducts from "./Components/AllProducts";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
import Cart from "./Components/Cart";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
    {
      path: "all-products",
      element: (
        <>
          <Header />
          <AllProducts />
        </>
      ),
    },
    {
      path: "product",
      element: (
        <>
          <Header />
          <Product />
        </>
      ),
    },
    {
      path: "cart",
      element: (
        <>
          <Header />
          <Cart />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
