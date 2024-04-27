import "./App.css";
import CustomerComponent from "./components/CustomerComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListCustomerComponent from "./components/ListCustomerComponent";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path="/" element={<ListCustomerComponent />}></Route>
          {/* // http://localhost:3000/customer */}
          <Route path="/customer" element={<ListCustomerComponent />}></Route>
          {/* // http://localhost:3000/add-customer */}
          <Route path="/add-customer" element={<CustomerComponent />}></Route>

          {/* http://localhost:3000/customer-report/1 */}
          <Route
            path="/customer-report/:id"
            element={<ReportComponent />}
          ></Route>

          {/* http://localhost:3000/edit-customer/1 */}
          <Route
            path="/edit-customer/:id"
            element={<CustomerComponent />}
          ></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
