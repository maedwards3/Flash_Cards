import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/collection/${props.selectedCollection}/card/`)
        .then(response => setCards(response.data))
    }, []);

    return (
        <div>
            {cards.map(card => {
                return(
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{card.key_word}</h4>
                            <p className="card-text">{card.definition}</p>
                            <button>Previous</button>
                            <button>Next</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;