import React, { Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error = React.lazy(() => import("./pages/Error"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const UserList = React.lazy(() => import("./pages/User"));
import "./assets/tailwind.css";
import Loading from "./components/Loading";

//import Orders from './pages/Orders';
//import Customers from './pages/Customers';
//import NotFound from './pages/NotFound';
//import Error400 from './pages/Error400';
//import Error401 from './pages/Error401';
//import Error403 from './pages/Error403';
//import MainLayout from './layouts/MainLayout';
//import AuthLayout from './layouts/AuthLayouts';
//import Login from './pages/auth/Login';
//import Register from './pages/auth/Register';
//import Forgot from './pages/auth/Forgot';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/error/:errorcode" element={<Error />} />
          <Route path="/userlist" element={<UserList />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
