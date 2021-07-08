import React, { useState } from 'react';

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
            <div className="card-body back">
                <p>{cardNumber + 1} of {props.cards.length + 1}</p>
                {
                    sideShown === 'front' ?
                    <div className="card-content front">
                        <h4 className="card-title">{selectedCard.key_word}</h4>
                        <button onClick={onShowBack}>Flip to back</button>
                    </div>
                    :
                    <div className="card-content back">
                        <h5 className="card-text">{selectedCard.definition}</h5>
                        <button onClick={onShowFront}>Flip to front</button>
                    </div>
                }
                <button onClick={() => previousCard()}>Previous</button>
                <button onClick={() => nextCard()}>Next</button>
            </div>
        </div>
    )
}

export default Cards;