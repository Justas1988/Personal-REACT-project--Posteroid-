import React from 'react'

export default function Cards(props) {    
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
            <button className="editButton" onClick={() => props.openEditor(props.cardId)}>EDIT</button>
        </div>
            <div className="likeDiv" style={BorderColor}>
                <button className="likeButton" onClick={() => props.likesIncrementer(props.cardId)}><span>&#9757;</span></button>
                <div className="likesContainer">{props.likes}</div>
            </div>
    </div>
  
    </>
    )
}
