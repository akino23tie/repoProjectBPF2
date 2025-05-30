// pages/Orders.jsx
import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders.json";

const Orders = () => {
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);
  const [newOrder, setNewOrder] = useState({
    orderId: "",
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  const handleAddOrder = () => {
    setOrders([...orders, newOrder]);
    setNewOrder({ orderId: "", customerName: "", status: "Pending", totalPrice: "", orderDate: "" });
    setShowForm(false);
  };

  return (
    <div className="p-4">
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]} buttonText="Add Order" onButtonClick={() => setShowForm(!showForm)} />

      {showForm && (
        <div className="my-4 bg-gray-100 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Add New Order</h2>
          <div className="grid grid-cols-2 gap-4">
            <input className="p-2 border" placeholder="Order ID" value={newOrder.orderId} onChange={(e) => setNewOrder({ ...newOrder, orderId: e.target.value })} />
            <input className="p-2 border" placeholder="Customer Name" value={newOrder.customerName} onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })} />
            <select className="p-2 border" value={newOrder.status} onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}>
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
            <input className="p-2 border" placeholder="Total Price" value={newOrder.totalPrice} onChange={(e) => setNewOrder({ ...newOrder, totalPrice: e.target.value })} />
            <input className="p-2 border" placeholder="Order Date" value={newOrder.orderDate} onChange={(e) => setNewOrder({ ...newOrder, orderDate: e.target.value })} />
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddOrder}>
            Submit
          </button>
        </div>
      )}

      <table className="w-full mt-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Order ID</th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Status</th>
            <th className="p-2">Total Price</th>
            <th className="p-2">Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-2">{order.orderId}</td>
              <td className="p-2">{order.customerName}</td>
              <td className="p-2">{order.status}</td>
              <td className="p-2">${order.totalPrice}</td>
              <td className="p-2">{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
