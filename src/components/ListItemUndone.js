import React, { useState } from 'react'
import { FaCheck, FaRegTrashCan } from "react-icons/fa6";

function ListItem(props) {

    return (
        <ul className='ulUndone'>
            {props.items.map(item => <li className='itemUndone' key={item.id}>
                <p className='textItem undone'>{item.text}</p>
                <div className='buttonItem'>
                    <button className='check' onClick={() => { props.onItemDone(item) }} remove><FaCheck className='checkIcon'/></button>
                    <button className='trash' onClick={() => { props.onItemDeleted(item) }}><FaRegTrashCan className='trashIcon'/></button>
                </div>
            </li>)}
        </ul>
    )
}


export default ListItem