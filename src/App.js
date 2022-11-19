import "./Styles/main.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AllProducts from "./Components/AllProducts";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Cart from "./Components/Cart";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "all-products",
      element: <AllProducts />,
    },
    {
      path: "product",
      element: <Product />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
