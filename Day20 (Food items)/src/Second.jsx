import React from 'react'
import './Second.css'
function Second({itemname,itemimg}) {
    return (
        <>
        <div className='Main2'>
            <h1>{itemname}</h1>
            <img src={itemimg} alt="" />
        </div>
        </>
    )
}

export default Second