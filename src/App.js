import "./Styles/main.css";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const PrivacyPolicy = React.lazy(() => import("./Components/PrivacyPolicy"));
const AllProducts = React.lazy(() => import("./Components/AllProducts"));
const Product = React.lazy(() => import("./Components/Product"));
const Cart = React.lazy(() => import("./Components/Cart"));
const Checkout = React.lazy(() => import("./Components/Checkout"));
const Home = React.lazy(() => import("./Components/Home"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <React.Suspense fallback={<Loader />}>
            <Home />
          </React.Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: "all-products",
      element: (
        <>
          <Header />
          <React.Suspense fallback={<Loader />}>
            <AllProducts />
          </React.Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: "product",
      element: (
        <>
          <Header />
          <React.Suspense fallback={<Loader />}>
            <Product />
          </React.Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: "cart",
      element: (
        <>
          <Header />
          <React.Suspense fallback={<Loader />}>
            <Cart />
          </React.Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: "checkout",
      element: (
        <>
          <Header />
          <React.Suspense fallback={<Loader />}>
            <Checkout />
          </React.Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: "terms-and-condition",
      element: (
        <>
          <Header />
          <React.Suspense fallback={<Loader />}>
            <PrivacyPolicy status="t" />
          </React.Suspense>
          <Footer />
        </>
      ),
    },
    {
      path: "privacy-policy",
      element: (
        <>
          <Header />
          <React.Suspense fallback={<Loader />}>
            <PrivacyPolicy status="p" />
          </React.Suspense>
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
