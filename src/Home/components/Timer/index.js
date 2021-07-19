import React, { useState, useEffect } from 'react';
import './style.css'

export default function Timer(){

    const [time, setTime] = useState([])
    
    useEffect(() => {
        let timer = setInterval(() => {  
        let actualTime = new Date();
        let finalTime = new Date('20 Jul 2021 20:00:00 GMT-0300');
        let diferenceTime = finalTime.getTime() - actualTime.getTime();
        let days = Math.floor(diferenceTime / (24 * 60 * 60 * 1000));
        let hours = Math.floor(diferenceTime / (60 * 60 * 1000) % 24);
        let minutes = Math.floor(diferenceTime / (60 * 1000) % 60);
        let secunds = Math.floor(diferenceTime / 1000 % 60);
        
        days < 10 && days >= 0 ? (days =  '0' +  days) : days = days
        hours < 10 && hours >= 0 ? (hours =  '0' +  hours) : hours = hours
        minutes < 10 && minutes >= 0 ? (minutes =  '0' +  minutes) : minutes = minutes
        secunds < 10 && secunds >= 0 ? (secunds =  '0' +  secunds) : secunds = secunds

        if((days === '00' || days < 0) && (hours === '00' || hours < 0) && (minutes === '00' || minutes < 0) && (secunds === '00' || secunds < 0)){
            clearInterval(timer)
            setTime(`A oferta encerrou`)
        }else{
            setTime(`${days}d  :  ${hours}h  :  ${minutes}min  :  ${secunds}s`)
        }    
        }, 1000)
    }, []);

    return(
        <div className='cardTime'>
            <h3 className='textTime'>Tempo restante:</h3>
            <h3 className='textTime'>{time}</h3>
        </div>
    )
}