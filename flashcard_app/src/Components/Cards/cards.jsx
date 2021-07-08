import React, { useState, useEffect } from 'react';

const Cards = (props) => {
    return (
        <div>
            {props.cards.map(card => {
                console.log(card)
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