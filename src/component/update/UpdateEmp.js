import React, { useEffect, useState } from "react";
import "./UpdateEmp.css";
import swal from "sweetalert";
import { Link, useParams } from "react-router-dom";

const UpdateEmp = () => {
  const params = useParams();
  console.log("params-----", params.id);
  const [empData, setEmpData] = useState({ name: "", price: "", quantity: "" });

  function handle(e) {
    const value = e.target.value;
    setEmpData({
      ...empData,
      [e.target.name]: value,
    });
  }

  const postEvent = (e) => {
    // console.log("empData", name, price, quantity);
    e.preventDefault();
    const bodyData = {
      id: params.id,
      name: empData.name,
      price: empData.price,
      quantity: empData.quantity,
    };
    console.log("data----", bodyData);
    const url = "http://localhost:9191/updateProduct";
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(bodyData),
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
    window.location.reload(false);
  };

  function getUpdatedProductById() {
    fetch(`http://localhost:9191/findProductBy/${params.id}`)
      .then((response) => response.json())
      .then((data) => setEmpData(data));
  }

  useEffect(() => {
    getUpdatedProductById();
  }, [params.id]);

  return (
    <div className="updateProduct-main">
      <h2>Add Employee</h2>
      <Link to="/crud-operation">
        <button className="update-home-button">Home </button>
      </Link>
      <div className="updateProduct-wrapper">
        <form onSubmit={postEvent}>
          <div class="form-group">
            <label for="exampleInputEmail1">Employee Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Employee name"
              name="name"
              onChange={handle}
              value={empData.name}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Employee Salary</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Employee name"
              name="price"
              onChange={handle}
              value={empData.price}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Employee quantity</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="quantity"
              onChange={handle}
              value={empData.quantity}
            >
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
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Update EmpInfo
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmp;
