import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;