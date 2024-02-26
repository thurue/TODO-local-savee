import React, { useState } from 'react'
import { FaCheck, FaRegTrashCan } from "react-icons/fa6";



function ListItemDone(props) {
       
    return (
        <ul className='ulDone'>
            {props.itemsDone.map(item => <li className='itemDone' key={item.id}>
                <p className='textItem'>
                    {item.text}
                </p>
                <div className='buttonItem'>
                    <button className='trash' onClick={() => { props.onItemDeletedDone(item) }}><FaRegTrashCan className='trashIcon' /></button>
                </div>
            </li>)}
        </ul>
    )
}


export default ListItemDone