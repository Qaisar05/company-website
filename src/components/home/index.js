import React from 'react';
import Navbar from '../navbar';
import Category from '../category';
import Jumbotron from './jumbotron';
import Whyus from './whyus';
import Templates from '../templates';
import Benefits from './benefits';
import Features from './features';
import Yellow from '../yellow';
import Connect from '../connect';
import Divider from '../divider';
import Footer from '../footer';



export default () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Whyus />
            <Category />
            <Templates />
            <Benefits />
            <Features />
            <Yellow />
            <Connect />
            <Divider />
            <Footer />
        </div>
    )
}