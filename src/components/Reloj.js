import React, { useState, useEffect } from 'react';
import '../styles/Reloj.css'

function Reloj() {

    const [timeToShow, setTime] = useState();
    const [dateToShow, setDate] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
        setInterval(() => {
            const date = new Date();
            setDate(date.toLocaleDateString());
        }, 1000);
    }, []);

    return (
        <div className='reloj'>
            <p className='reloj-fecha'>{dateToShow}</p>
            <p className='reloj-tiempo'>{timeToShow}</p>
        </div>
    );

}


export default Reloj;