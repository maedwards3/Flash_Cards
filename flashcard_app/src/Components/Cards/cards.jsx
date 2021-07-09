import React, { useState } from 'react';
import AddCard from '../CreateCard/createCard';
import './cards.css';

const Cards = (props) => {
    const [cardNumber, setCardNumber] = useState(0);
    const [sideShown, setSideShown] = useState('front');
    const selectedCard = props.cards[cardNumber];


    function previousCard() {
        let card = cardNumber - 1;
        if (card < 0) {
            card = props.cards.length - 1;
        }
        setCardNumber(card)
        console.log("prev button is being clicked") //test
    }

    function nextCard() {
        let card = cardNumber + 1;
        if (card === props.cards.length) {
            card = 0;
        }
        setCardNumber(card)
        console.log("next button is being clicked") //test
    }

    const onShowBack = () => {
        setSideShown('back');
    }
    
    const onShowFront = () => {
        setSideShown('front');
    }

    return (
        <div className="card">
            <div>{console.log("Cards component props.cards", props.cards)}</div>
            <div className="card-body">
                <p>{cardNumber + 1} of {props.cards.length}</p>
                {
                    sideShown === 'front' ?
                    <div className="card-content front">
                        <h2 className="card-title">{selectedCard.key_word}</h2>
                        <button type="button" className="btn btn-outline-info" onClick={onShowBack}>Flip to back</button>
                    </div>
                    :
                    <div className="card-content back">
                        <h5 className="card-text">{selectedCard.definition}</h5>
                        <button type="button" className="btn btn-outline-info" onClick={onShowFront}>Flip to front</button>
                    </div>
                }
                <button type="button" className="btn btn-outline-secondary" onClick={() => previousCard()}>Previous</button>
                <button type="button" className="btn btn-outline-secondary" onClick={() => nextCard()}>Next</button>
            </div>
            <AddCard />
        </div>
    )
}

export default Cards;