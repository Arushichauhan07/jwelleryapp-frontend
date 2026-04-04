import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import SignupDialog from './components/SignUpDialog.jsx'
import Products from './pages/Products.jsx'
import Product from './pages/Product.jsx'



// *****************************************ADMIN************************************************** 
import AdminDashboard from './admin/AdminDashboard.jsx'
import AdminHome from './admin/pages/AdminHome.jsx';
import Users from './admin/pages/Users.jsx';
import Orders from './admin/pages/Orders.jsx';
import Settings from './admin/pages/Settings.jsx';
import ProductsAdmin from './admin/pages/ProductsAdmin.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
      </Route>
        <Route path="admin" element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<ProductsAdmin />} />
          <Route path="settings" element={<Settings />} />
        </Route>
    </Routes>
    <SignupDialog/>
    </>
  )
}

export default App
