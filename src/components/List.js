import React, { useState } from 'react'
import ListItem from './ListItemUndone'
import ListItemDone from './ListItemDone'


function List(props) {

    return (
        <div>
            <ListItem items={props.items} onItemDeleted={props.onItemDeleted} onItemDone={props.onItemDone}></ListItem>
            <h1>Done</h1>
            <ListItemDone onItemDeletedDone={props.onItemDeletedDone} itemsDone={props.itemsDone}></ListItemDone>
        </div>
    )
}


export default List