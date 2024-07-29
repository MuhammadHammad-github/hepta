import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ErrorPage from "./error-page.jsx";
import MyNavbar from "./components/MyNavbar.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Modal from "react-modal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
Modal.setAppElement("#root");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyNavbar />
      <App />
      {/* <RouterProvider router={router} /> */}
      <MyFooter />
    </BrowserRouter>
  </React.StrictMode>
);
