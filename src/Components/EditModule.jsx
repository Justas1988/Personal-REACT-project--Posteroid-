import React, { useState, useEffect } from 'react';

export default function EditModule({ open, editCardHandler, cardsArray }) {    
    const [titleText, setEditorTitleText] = useState("New card Title") //input state
    const [mainText, setEditorMainText] = useState("New Main card Text") //input state
    const [bottomText, setEditorBottomText] = useState("New Bottom card Text") //input state  
    
    function primaryState() {
        const cardsCopy = [...cardsArray]        
    for (let i = 0; i < cardsCopy.length; i++) {
        if (cardsCopy[i].id === open) {
            const newTitle = cardsCopy[i].title;
            const newMain = cardsCopy[i].main;
            const newBottom = cardsCopy[i].bottom;
            setEditorTitleText(newTitle)
            setEditorMainText(newMain)
            setEditorBottomText(newBottom)
        break;
            }
        }
    }

    useEffect(  () => { primaryState() }, [open] )

    function titleInputHandler (e) {
        setEditorTitleText(e.target.value)
      }
    function mainInputHandler (e) {
        setEditorMainText(e.target.value)
      }
    function bottomInputHandler (e) {
        setEditorBottomText(e.target.value)
      }   

    if(open === 0) {
        return null;
    }   

    return (
        <div className="editModuleContainer">
            <div className="editModule">                
                <input type="text" value={titleText} onChange={titleInputHandler}/>                
                <input type="text" value={mainText} onChange={mainInputHandler}/>
                <input type="text" value={bottomText} onChange={bottomInputHandler}/>
                <button onClick={() => editCardHandler(open, titleText, mainText, bottomText)}>Submit</button> 
            </div>           
        </div>
    )
}
