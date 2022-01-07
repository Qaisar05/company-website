import React from 'react';
import Category from '../category';
import Templates from '../templates';
import Connect from '../connect';
import Divider from '../divider';
import Footer from '../footer';
import Navbar from '../navbar';



export default () => {
    return (
        <div>
            <Navbar />
            <Category />
            <Templates />
            <Connect />
            <Divider />
            <Footer />
        </div>
    )
}