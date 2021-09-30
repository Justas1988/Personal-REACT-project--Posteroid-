import React from 'react';

export default function EditModule({open}) {
    console.log('editModule')

    if(open === 0) {
        return null;
    }


    return (
        <div className="editModuleContainer">
            <div className="editModule">
                <label>New title</label>
                <input type="text" />
                <label>New main</label>
                <input type="text" />
                <label>New bottom</label>
                <input type="text" />
                <button>Submit</button> 
            </div>           
        </div>
    )
}
