import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import ProductDisplay from './components/ProductDisplay';
import Footer from './components/Footer';
import Login from './pages/Login';

const Layout = () => {

    const [showPopup, setShowPopup] = useState(false);
    return (
        <div >
            <Slider />
            <Navbar showPopup={showPopup} setShowPopup={setShowPopup}/>
            <Login showPopup={showPopup} setShowPopup={setShowPopup} />

            <ProductDisplay />

            {/* Main Content */}
            <main style={{ padding: "2rem" }}>
                <Outlet />
            </main>

            {/* Footer */}

            <Footer />

        </div>
    )
}

export default Layout