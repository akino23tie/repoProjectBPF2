import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="p-4">
      <PageHeader title="Users" breadcrumb={["Dashboard", "Users"]} />

      <table className="w-full mt-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Username</th>
            <th className="p-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">
                {user.firstName} {user.lastName}
              </td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.phone}</td>
              <td className="p-2">{user.username}</td>
              <td className="p-2">
                <img src={user.image} alt={user.firstName} className="w-10 h-10 rounded-full" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
