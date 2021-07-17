import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Electronics from './components/Electronics';
import Promotions from './components/Promotions';
import Footer from './components/Footer';

export default function Home(){
    return(
        <>
            <Header/>
            <Main/>
            <Electronics/>
            <Promotions/>
            <Footer/>
        </>
    )
}