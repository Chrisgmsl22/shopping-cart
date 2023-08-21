import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./error";
import Root from "./Root";
import { TotalPage } from "./components/Total";
import { Contact } from "./components/pages/Contact";
import { Catalog } from "./components/pages/Catalog";
import { AllProducts } from "./components/pages/AllProducts";
import { ShoppingCartProvider } from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "total",
    element: <TotalPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "all-products",
    element: <AllProducts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "catalog",
    element: <Catalog />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
