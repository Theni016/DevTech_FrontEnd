import React, { useEffect, useState } from "react";
import { deleteCustomer, listCustomers } from "../services/CustomerService";
import { useNavigate } from "react-router-dom";
import { Pencil } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";
import { PersonAdd } from "react-bootstrap-icons";
import "../components/ListCustomerComponent.css";

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

  function reportcustomer(id) {
    navigator(`/customer-report/${id}`);
  }

  function removeCustomer(id) {
    console.log(id);

    deleteCustomer(id)
      .then(() => {
        getAllCustomer();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const clickableRowClass = "clickable-row";

  return (
    <div className="cover">
      <div className="container">
        <h2 className="text-center" style={{ color: "white" }}>
          Customer Details
        </h2>
        <button
          className="btn btn-outline-primary mb-2"
          onClick={addNewCustomer}
        >
          <PersonAdd style={{ fontSize: "25px" }} />
        </button>
        <table className="table table-bordered table-hover table-dark">
          <thead className="th-light" style={{ textAlign: "center" }}>
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

          <tbody style={{ textAlign: "center" }}>
            {customer.map((customer) => (
              <tr
                key={customer.id}
                className={clickableRowClass}
                onClick={() => reportcustomer(customer.id)}
              >
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.issue}</td>
                <td>{customer.deliverystatus}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={(e) => {
                      e.stopPropagation();
                      updateCustomer(customer.id);
                    }}
                  >
                    <Pencil />
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCustomer(customer.id);
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCustomerComponent;
