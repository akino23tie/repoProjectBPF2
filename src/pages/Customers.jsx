// pages/Customers.jsx
import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";

const Customers = () => {
  const [customers, setCustomers] = useState(customersData);
  const [showForm, setShowForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    customerId: "",
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const handleAddCustomer = () => {
    setCustomers([...customers, newCustomer]);
    setNewCustomer({ customerId: "", customerName: "", email: "", phone: "", loyalty: "Bronze" });
    setShowForm(false);
  };

  return (
    <div className="p-4">
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]} buttonText="Add Customer" onButtonClick={() => setShowForm(!showForm)} />

      {showForm && (
        <div className="my-4 bg-gray-100 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Add New Customer</h2>
          <div className="grid grid-cols-2 gap-4">
            <input className="p-2 border" placeholder="Customer ID" value={newCustomer.customerId} onChange={(e) => setNewCustomer({ ...newCustomer, customerId: e.target.value })} />
            <input className="p-2 border" placeholder="Customer Name" value={newCustomer.customerName} onChange={(e) => setNewCustomer({ ...newCustomer, customerName: e.target.value })} />
            <input className="p-2 border" placeholder="Email" value={newCustomer.email} onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })} />
            <input className="p-2 border" placeholder="Phone" value={newCustomer.phone} onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })} />
            <select className="p-2 border" value={newCustomer.loyalty} onChange={(e) => setNewCustomer({ ...newCustomer, loyalty: e.target.value })}>
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddCustomer}>
            Submit
          </button>
        </div>
      )}

      <table className="w-full mt-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Customer ID</th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Loyalty</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-2">{customer.customerId}</td>
              <td className="p-2">{customer.customerName}</td>
              <td className="p-2">{customer.email}</td>
              <td className="p-2">{customer.phone}</td>
              <td className="p-2">{customer.loyalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
