import React from 'react'

export default function Cards(props) {
    return (
    <div className="card">
        <div className="cardTopDiv">
            <label>{props.titleText}</label>
            <button className="deleteButton" onClick={()=>props.deleteCard(props.cardId)}><span>&#9932;</span></button>
        </div>
        <div>{props.mainText}</div>
        <div>{props.bottomText}</div>
        
    </div>
    )
}
