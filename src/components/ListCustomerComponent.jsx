import React, { useEffect, useState } from "react";
import { deleteCustomer, listCustomers } from "../services/CustomerService";
import { useNavigate } from "react-router-dom";

const ListCustomerComponent = () => {
  const [customer, setCustomers] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllCustomer();
  }, []);

  function getAllCustomer() {
    listCustomers()
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewCustomer() {
    navigator("/add-customer");
  }

  function updateCustomer(id) {
    navigator(`/edit-customer/${id}`);
  }

  function removeCustomer(id) {
    console.log(id);

    deleteCustomer(id)
      .then((response) => {
        getAllCustomer();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-outline-primary mb-2" onClick={addNewCustomer}>
        Add New Customer
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Reason for Service</th>
            <th>Delivery Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customer.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.issue}</td>
              <td>{customer.deliverystatus}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateCustomer(customer.id)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => removeCustomer(customer.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListCustomerComponent;
