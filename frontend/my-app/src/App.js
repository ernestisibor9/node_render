import React from "react";
import Register from "./components/Register";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Register />
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
