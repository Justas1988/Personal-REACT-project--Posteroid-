import React, { useState, useEffect, useCallback } from 'react';


export default function EditModule({ open, editCardHandler, cardsArray, editModuleHandler }) {    
    const [titleText, setEditorTitleText] = useState("New card Title") //input state
    const [mainText, setEditorMainText] = useState("New Main card Text") //input state
    const [bottomText, setEditorBottomText] = useState("New Bottom card Text") //input state  
    const [borderColor, setBorderColor] = useState("transparent") //edit window border color state    
    
    function borderColorSetter(color) {        
        setBorderColor(color)       
    }
    
    const primaryState = useCallback( () => {
        const cardsCopy = [...cardsArray]        
    for (let i = 0; i < cardsCopy.length; i++) {
        if (cardsCopy[i].id === open) {
            const newTitle = cardsCopy[i].title;
            const newMain = cardsCopy[i].main;
            const newBottom = cardsCopy[i].bottom;
            setEditorTitleText(newTitle)
            setEditorMainText(newMain)
            setEditorBottomText(newBottom)
            borderColorSetter(cardsCopy[i].color)
        break;
            }
        }
    }, [cardsArray, open])

    useEffect(  () => { primaryState(); }, [primaryState, open] );    

    function titleInputHandler (e) {
        setEditorTitleText(e.target.value)
      }
    function mainInputHandler (e) {
        setEditorMainText(e.target.value)
      }
    function bottomInputHandler (e) {
        setEditorBottomText(e.target.value)
      }  
    function editCardTrigger(open, titleText, mainText, bottomText) {
        editCardHandler(open, titleText, mainText, bottomText)
        editModuleHandler(0)
    }   

    if(open === 0) {
        return null;
    }   
    return (
        <div className="editModuleContainer" style={{borderColor}}>
            <div className="editModule">                
                <input className="editTitleInput" type="text" value={titleText} onChange={titleInputHandler} maxLength="17"/>                
                <textarea className="editMainInput" type="text" value={mainText} onChange={mainInputHandler} maxLength="170"/>
                <div className="editModuleBottom">
                    <input className="editBottomInput" type="text" value={bottomText} onChange={bottomInputHandler} maxLength="17"/>
                    <button className="editButtonEditModule" onClick={() => editCardTrigger(open, titleText, mainText, bottomText)}>Submit</button> 
                </div>
            </div>           
        </div>
    )
}
