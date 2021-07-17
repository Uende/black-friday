import React from 'react';
import logo from '../../../images/logo.png'
import './style.css';

export default function Header(){
    return(
        <header>
           <img src={logo} alt="Logo AM.ELETRO" /> 
        </header>
    )
}