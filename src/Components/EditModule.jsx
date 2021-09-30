import React, { useState } from 'react';

export default function EditModule({ open, editCardHandler }) {    

    const [titleText, setTitleText] = useState("New card Title") //input state
    const [mainText, setMainText] = useState("New Main card Text") //input state
    const [bottomText, setBottomText] = useState("New Bottom card Text") //input state

    function titleInputHandler (e) {
        setTitleText(e.target.value)
      }
      function mainInputHandler (e) {
        setMainText(e.target.value)
      }
      function bottomInputHandler (e) {
        setBottomText(e.target.value)
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
