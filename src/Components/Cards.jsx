import React, { useState } from 'react';
import EditModule from "./EditModule";
import { debounce } from "lodash";



export default function Cards(props) {  
    const [open, setOpen] = useState(0) //editModule state
    const [likeStyle, setlikeStyle] = useState();
    
    const styleLikeDrop = {
        animationName: "likedrop",
    }
    const likesIncrementerTrigger = debounce (() => {
        props.likesIncrementer(props.cardId)
        setlikeStyle(styleLikeDrop) 
        LikeStyleReset()       
    }, 300)
    
    const LikeStyleReset = debounce (() => {
        setlikeStyle()
    }, 600)

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
                <button className="likeButton" onClick={() => likesIncrementerTrigger(props.cardId)}><span>&#128077;</span></button>
                <div style={likeStyle} className="likesContainer">{props.likes}</div>
            </div>
    </div>
    <div>
        <EditModule editModuleHandler={editModuleHandler} editCardHandler = {props.editCardHandler} open={open} cardsArray = {props.cardsArray}/>
    </div>
  
    </>
    )
}
