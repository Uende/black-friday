import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import Product from './components/Product';
import Promotions from './components/Promotions';
import Footer from './components/Footer';

export default function Home(){
    return(
        <>
            <Main/>
            <Product/>
            <Promotions/>
            <Footer/>
        </>
    )
}