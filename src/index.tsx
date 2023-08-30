import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { ErrorPage } from "./error";
import Root from "./Root";
import { TotalPage } from "./components/Total";
import { Contact } from "./components/pages/Contact";
import { Catalog } from "./components/pages/Catalog";
import { AllProducts } from "./components/pages/AllProducts";
import { ShoppingCartProvider } from "./context";
import { ItemInfo } from "./components/ItemInfo/ItemInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/total",
    element: <TotalPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/all-products",
    element: <AllProducts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/all-products/:itemId",
    element: <ItemInfo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/catalog",
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
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            {/* Child routes of root *}
          </Route>
          <Route
            path="total"
            element={<TotalPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/all-products"
            element={<AllProducts />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/contact"
            element={<Contact />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/catalog"
            element={<Catalog />}
            errorElement={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
