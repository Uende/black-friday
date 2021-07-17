import React, {useState} from 'react';
import './style.css';

export default function Promotions(){

    const [email, setEmail] = useState('');
    function saveEmail(){
        if(email.includes('@') && email.length > 13){
            localStorage.setItem('email', email)
        }else{
            alert('Por favor, insira um e-mail valido')
        }
    }

    return(
        <>
            <section className='section-promotions'>
                <h1 id='titlePromotions'>Cadastre seu e-mail e receba nossas promoções e descontos</h1>
                <input type="email" name="email" id="input" placeholder='Insira seu e-mail' onChange={e => setEmail(e.target.value)}/>
                <button type="submit" id='btn' onClick={saveEmail}>Cadastrar</button>
            </section>
        </>
    )
}