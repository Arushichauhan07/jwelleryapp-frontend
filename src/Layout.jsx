import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import ProductDisplay from './components/ProductDisplay';
import Footer from './components/Footer';

const Layout = () => {
    return (
        <div className='app-layout'>
            <Slider />
            <div className='bg-[#640d14] top-0'>
                <Navbar />
            </div>
            <div>
                <ProductDisplay />
            </div>



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