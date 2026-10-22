import React, { useState } from 'react'
import './Second.css'
function Second({itemName,itemImg}) {
    const [state,setState] = useState(10);
    function addItem(){
        setState(state - 1)
    }
    function removeItem(){
        setState(state + 1)
    }
    return (
        <div>
            <div className='Main2'>
                
                    <h1>{itemName}</h1>
                    <br/>
                    <img src={itemImg} alt="" />
                    <br />
                    <h1>{state}Avaliable</h1>
                    <br />
                    <button onClick={addItem}>Add item</button>
                    <button onClick={removeItem}>Remove item</button>
            </div>
            <br />
        </div>
    )
}

export default Second