import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import NewCollection from './pages/NewCollection.jsx';
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
import Practice from './pages/Practice.jsx';
import OurStory from './pages/OurStory.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Cart from './pages/Cart.jsx';
import { Toaster } from 'react-hot-toast';
import CheckoutPage from './pages/CheckoutPage.jsx';

function App() {
  return (
    <>
    <Toaster
        position="top-right"
        reverseOrder={false}
      />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="new-collection" element={<NewCollection />} />
        <Route path="product/:id" element={<Product />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="our-story" element={<OurStory />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckoutPage/>} />
      </Route>

        <Route path="admin" element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<ProductsAdmin />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="practice" element={<Practice />} />
    </Routes>
    <SignupDialog/>
    </>
  )
}

export default App
