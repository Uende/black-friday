import React from 'react';
import './style.css';
import imgEletros from '../../../images/tablet-and-smartphone.png'

export default function Electronics(){
    return(
        <section className='section-electronics'>
            <h1 id='titleElectro'>Eletrônicos que estão disponíveis na nossa Black Friday</h1>
            <img id='imgEletros' src={imgEletros} alt="Tablet e Smartphone"/>
            <h5 id='price'>De R$599,90 até R$1.569,90</h5>
        </section>
    )
}