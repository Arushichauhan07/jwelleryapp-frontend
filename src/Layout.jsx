import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import ProductDisplay from './components/ProductDisplay';
import Footer from './components/Footer';

const Layout = () => {
    return (
        <div >
            <Slider />
            <Navbar />


            <ProductDisplay />

            {/* Main Content */}
            <main style={{ padding: "2rem" }}>
                <Outlet /> {/* Renders the current page here */}
            </main>

            {/* Footer */}

            <Footer />

        </div>
    )
}

export default Layout