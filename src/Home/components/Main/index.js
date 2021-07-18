import React, {useState, useEffect} from 'react';
import './style.css';

export default function Main(){

    const [time, setTime] = useState(``)
  useEffect(() => {
    let h = 20;
    let m = 30;
    let s = 60;
    let timer = setInterval(() => {  
      s -= 1;
      if(s === 0  && h !== 0){
        m = m - 1;
        s = 60;
      }
      if(m === 0){
        if(h !== 0 && h !== 1){
          h = h - 1;
        }else if(h === 1){
          h = 0;
          m = 59;
        }
      }
      if(h === 0 && s === 0){
        if(m !== 0){
          m = m - 1;
          s = 60
        }else{
          clearInterval(timer)
        }   
      }
      setTime(`${h}h  :  ${m}min  :  ${s}s`)
    }, 1000)
  }, []);

    return(
        <>
            <main>
                    <div className='textsMain'>
                        <h1 id='textBF'>Black Friday <br></br> de Headphone</h1>
                        <h2 id='textOFF'>60% DE DESCONTO + FRETE GRÁTIS</h2>
                        <div className='cardTime'>
                            <h3 className='textTime'>Tempo restante:</h3>
                            <h3 className='textTime'>{time}</h3>
                        </div>
                    </div>
            </main>
        </>
    )
}