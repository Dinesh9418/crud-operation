import React, { useState } from "react";
import "./AddProduct.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  const postEvent = (e) => {
    // console.log("empData", name, price, quantity);
    e.preventDefault();
    window.location.reload(false);
    const data = {
      name: name,
      price: price,
      quantity: quantity,
    };
    console.log("data----", data);
    const url = "http://localhost:9191/addProduct";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res, "res");
        swal({
          title: "Employee Added successfully",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((e) => console.log("e", e));
  };

  return (
    <div className="AddProduct-main">
      <h2>Add Employee</h2>
      <div className="addProduct-wrapper">
        <Link to="/crud-operation">
          <button className="home-button">Home</button>
        </Link>
        <form onSubmit={postEvent}>
          <div class="form-group">
            <label for="exampleInputEmail1">Employee Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Employee name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Employee Salary</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Employee salary"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Employee salary month</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              required
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Add EmpInfo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
