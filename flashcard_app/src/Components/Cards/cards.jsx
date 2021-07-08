import React, { useState } from 'react';

const Cards = (props) => {
    const [cardNumber, setCardNumber] = useState(0)

    function previousCard() {
        let card = cardNumber;
        card--;
        if(card < 0) {
            card = props.cards.length - 1;
        }
        setCardNumber(card)
        console.log("prev button is being clicked") //test
    }

    function nextCard() {
        let card = cardNumber;
        card++;
        if(card === props.cards.length) {
            card = 0;
        }
        setCardNumber(card)
        console.log("next button is being clicked") //test
    }

    return (
        <div>
            {props.cards.map(card => {
                console.log(card)
                return(
                    <div className="card">
                        <div className="card-body">
                            <p>{cardNumber} of {props.cards.length}</p>
                            <h4 className="card-title">{card.key_word}</h4>
                            <p className="card-text">{card.definition}</p>
                            <button onClick={() => previousCard()}>Previous</button>
                            <button onClick={() => nextCard()}>Next</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;