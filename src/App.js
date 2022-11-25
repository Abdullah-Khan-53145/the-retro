import "./Styles/main.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AllProducts from "./Components/AllProducts";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
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
    {
      path: "checkout",
      element: (
        <>
          <Header />
          <Checkout />
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
