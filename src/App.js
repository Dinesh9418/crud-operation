import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "./component/employees/Employees";
import AddProduct from "./component/addProduct/AddProduct";
import UpdateEmp from "./component/update/UpdateEmp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/crud-operation" element={<Employees />}></Route>
          <Route path="/crud-operation/addProduct" element={<AddProduct />} />
          <Route
            path="/crud-operation/updateEmployee/:id"
            element={<UpdateEmp />}
          />
          {/*  <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element="No page found" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
