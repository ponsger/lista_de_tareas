import service from '../services/httpService'
import { useEffect, useState } from 'react';
import '../styles/PhraseOfDay.css'

function PhraseOfDay() {

    const [phraseOfDay, setPhrase] = useState({});

    useEffect(() => {
        service.getPhrase().then(data => setPhrase(data));

    }, [])

    return (
        <div className='phrase-card'>
            <div className="phrase-container">
                {/* <div className="phrase">Debes confiar mas en ti</div> */}
                <div className='phrase'>{phraseOfDay[0]["q"]}</div> 
            </div>
            <div className='author-container'>
                <p>Author: </p>
                {/* <p className='author'>De mi para mi</p> */}
                <p className='author'>{phraseOfDay[0]["a"]}</p>
            </div>

        </div>
    );
}

export default PhraseOfDay;