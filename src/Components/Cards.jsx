import React from 'react'

export default function Cards(props) {
    return (
    <div className="card">
        <div className="cardTopDiv">
            <label>{props.titleText}</label>            
            <button className="deleteButton" onClick={()=>props.deleteCard(props.cardId)}><span>&#9932;</span></button>
        </div>
        <div className="mainTextDiv">{props.mainText}</div>
        <div className="bottomDiv">
            <div>{props.bottomText}</div>
            <button className="editButton" onClick={() => props.openEditor(props.cardId)}>EDIT</button>
        </div>
    </div>
    )
}
