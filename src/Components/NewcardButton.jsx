import React from 'react'

export default function NewcardButton(props) {
    return (
       <button className="newbutton" onClick={props.addCard}>New Card</button>
    )
}
