import React, { useEffect, useState } from 'react'
import './Second.css'
function Second({itemName,itemImg}) {
    const [state,setState] = useState(10);
    const [message,setMessage] = useState("offer ON now!")
    useEffect(function(){
        if (state>10){
            setState(10)
        }
        if (state<6){
            setMessage("Hurry Up!!")
        }
        else{
            setMessage("offer ON now!")
        }
        if (state == 0){
            setMessage("Sold Out")
        }
        if (state<0){
            setState(0)
        }
    })
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
                    
                    <img src={itemImg} alt="" />
                    <br />
                    <h2>{state}Avaliable</h2>
                    <h2>{message}</h2>
                    <br />
                    <button onClick={addItem}>Add item</button>
                    <button onClick={removeItem}>Remove item</button>
            </div>
            <br />
        </div>
    )
}

export default Second