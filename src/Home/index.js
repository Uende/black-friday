import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Product from './components/Product';
import Promotions from './components/Promotions';
import Footer from './components/Footer';

export default function Home(){
    return(
        <>
            {/* <Header/> */}
            <Main/>
            <Product/>
            <Promotions/>
            <Footer/>
        </>
    )
}