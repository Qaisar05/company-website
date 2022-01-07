import React from 'react';
import Connect from '../connect';
import Divider from '../divider';
import Footer from '../footer';
import Detail from '../detail';
import Templates from '../templates';
import Navbar from '../navbar';


export default () => {
    return (
        <div>
            <Navbar />
            <Detail />
            <Templates />
            <Connect />
            <Divider />
            <Footer />
        </div>
    )
}