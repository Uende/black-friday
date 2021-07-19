import React from 'react';
import './style.css';
import headphone from '../../../images/headphone.png'


export default function Product(){

    return(
        <section className='section-product'>
            <h1 id='title-product'>Headphone New Bee <br></br> AirDots 2 </h1>
            <h5 id='price'>De R$249,90 por R$99,90</h5>
            <img id='headphone' src={headphone} alt="Headphone"/>
            <br></br>
            <button id='btn-comprar'>Comprar</button>
        </section>
    )
}