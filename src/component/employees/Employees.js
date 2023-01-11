import React, { useEffect, useState } from "react";
import "./Employees.css";
import { Link } from "react-router-dom";

const Employees = () => {
  const [empData, setEmpData] = useState();

  function getAllProduct() {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:9191/findAllProduct")
      .then((response) => response.json())
      .then((data) => setEmpData(data));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }
  useEffect(() => {
    getAllProduct();
  }, []);
  //   console.log("empData", empData);

  const DeleteEmp = (key) => {
    console.log("key", key);
    fetch(`http://localhost:9191/delete/${key}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Delete successful");
      getAllProduct();
    });
  };

  return (
    <div className="employee-main">
      <h2 className="employee_heading">Employees Details</h2>
      <Link to="/crud-operation/addProduct">
        <button className="add-button">Add Employee </button>
      </Link>
      <div className="employee-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name of employee</th>
              <th scope="col">Quantity</th>
              <th scope="col">Salary</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {empData ? (
              empData.map((item, key) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>
                      <Link to={`/crud-operation/updateEmployee/${item.id}`}>
                        <button className="update-button">update</button>
                      </Link>
                      <button
                        className="delete-button"
                        onClick={() => DeleteEmp(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>Data not found</div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
