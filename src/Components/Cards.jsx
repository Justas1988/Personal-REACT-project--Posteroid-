import React from 'react'

export default function Cards(props) {
    return (
    <div className="card">
        <label>{props.titleText}</label>
        <div>{props.mainText}</div>
        <div>{props.bottomText}</div>
    </div>
    )
}
