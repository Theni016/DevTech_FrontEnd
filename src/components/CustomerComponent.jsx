import React, { useEffect, useState } from "react";
import {
  createCustomer,
  getCustomer,
  updateCustomer,
} from "../services/CustomerService";
import { useNavigate, useParams } from "react-router-dom";
import "../components/CustomerComponent.css";
const CustomerComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");
  const [deliverystatus, setDeliverystatus] = useState("");

  const { id } = useParams();

  const [errors, SetErrors] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getCustomer(id)
        .then((response) => {
          setName(response.data.name);
          setEmail(response.data.email);
          setPhone(response.data.phone);
          setIssue(response.data.issue);
          setDeliverystatus(response.data.deliverystatus);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleName = (e) => setName(e.target.value);

  const handleEmail = (e) => setEmail(e.target.value);

  const handlePhone = (e) => setPhone(e.target.value);

  const handleIssue = (e) => setIssue(e.target.value);

  const handleDeliverystatus = (e) => setDeliverystatus(e.target.value);

  function saveOrUpdateCustomer(e) {
    e.preventDefault();

    if (validationForm()) {
      const customer = { name, email, phone, issue, deliverystatus };
      console.log(customer);

      if (id) {
        updateCustomer(id, customer)
          .then((response) => {
            console.log(response.data);
            navigator("/customer");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createCustomer(customer)
          .then((response) => {
            console.log(response.data);
            navigator("/customer");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validationForm() {
    let valid = true;

    const errorCopy = { ...errors };

    if (name.trim()) {
      errorCopy.name = "";
    } else {
      errorCopy.name = "Name required";
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "Valid email address required";
      valid = false;
    }

    if (phone.trim()) {
      errorCopy.phone = "";
    } else {
      errorCopy.phone = "Valid phone number required";
      valid = false;
    }

    if (issue.trim()) {
      errorCopy.issue = "";
    } else {
      errorCopy.issue = "Reason for service missing";
      valid = false;
    }

    SetErrors(errorCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Customer</h2>;
    } else {
      return <h2 className="text-center">Add new Customer</h2>;
    }
  }

  return (
    <div className="cover">
      <div className="container">
        <div className="row">
          <div
            className="card"
            style={{
              backgroundColor: "#212529",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            {pageTitle()}
            <div className="card-body d-flex flex-column justify-content-center py-3">
              <form>
                <div className="form-group mb-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    onChange={handleName}
                    style={{
                      backgroundColor: "#0D1117",
                      color: "#FFFFFF",
                    }}
                  ></input>
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="form-group mb-4">
                  <label className="form-label">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    onChange={handleEmail}
                    style={{ backgroundColor: "#0D1117", color: "#FFFFFF" }}
                  ></input>
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="form-group mb-4">
                  <label className="form-label">Phone number</label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    onChange={handlePhone}
                    style={{ backgroundColor: "#0D1117", color: "#FFFFFF" }}
                  ></input>
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>

                <div className="form-group mb-4">
                  <label className="form-label">Reason for Service</label>
                  <input
                    type="text"
                    name="issue"
                    value={issue}
                    className={`form-control ${
                      errors.issue ? "is-invalid" : ""
                    }`}
                    onChange={handleIssue}
                    style={{ backgroundColor: "#0D1117", color: "#FFFFFF" }}
                  ></input>
                  {errors.issue && (
                    <div className="invalid-feedback">{errors.issue}</div>
                  )}
                </div>

                <div className="form-group mb-4">
                  <label className="form-label">Delivery Status</label>
                  <select
                    type="text"
                    name="deliverystatus"
                    value={deliverystatus}
                    className="form-control"
                    onChange={handleDeliverystatus}
                    style={{ backgroundColor: "#0D1117", color: "#FFFFFF" }}
                  >
                    <option>PENDING</option>
                    <option>DELIVERED</option>
                  </select>
                </div>

                <button
                  className="btn btn-outline-success"
                  onClick={saveOrUpdateCustomer}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerComponent;
