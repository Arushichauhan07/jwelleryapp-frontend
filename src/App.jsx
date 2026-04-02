import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import SignupDialog from './components/SignUpDialog.jsx'
import Products from './pages/Products.jsx'
import Product from './pages/Product.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<Product />} />
      </Route>
    </Routes>
    <SignupDialog/>
    </>
  )
}

export default App
