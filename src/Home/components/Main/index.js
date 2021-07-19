import React from 'react';
import './style.css';
import Timer from '../Timer';


export default function Main(){

    return(
        <>
            <main>
                    <div className='textsMain'>
                        <h1 id='textBF'>Black Friday <br></br> de Headphone</h1>
                        <h2 id='textOFF'>60% DE DESCONTO + FRETE GRÁTIS</h2>
                        <Timer/>       
                    </div>
            </main>
        </>
    )
}