import React, { useState } from 'react';
import EditModule from "./EditModule"


export default function Cards(props) {  
    const [open, setOpen] = useState(0) //editModule state

    function editModuleHandler(e) {
        setOpen(e);
    }
  
    const Styles = {borderStyle: 'solid',
                borderWidth: '3px',
                borderColor: props.color}

    const BorderColor = {
        borderColor: props.color
    }
    return ( <>
    <div className="card" style={Styles}>
        <div className="cardTopDiv">
            <label>{props.titleText}</label>            
            <button className="deleteButton" onClick={()=>props.deleteCard(props.cardId)}><span>&#9932;</span></button>
        </div>
        <div className="mainTextDiv">{props.mainText}</div>
        <div className="bottomDiv">
            <div>{props.bottomText}</div>
            <button className="editButton" onClick={() => editModuleHandler(props.cardId)}>EDIT</button>
        </div>
            <div className="likeDiv" style={BorderColor}>
                <button className="likeButton" onClick={() => props.likesIncrementer(props.cardId)}><span>&#9757;</span></button>
                <div className="likesContainer">{props.likes}</div>
            </div>
    </div>
    <div>
        <EditModule editModuleHandler={editModuleHandler} editCardHandler = {props.editCardHandler} open={open} cardsArray = {props.cardsArray}/>
    </div>
  
    </>
    )
}
