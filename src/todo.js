import React, { useState, useEffect } from 'react'
import Item from "./components/item"
import FormAdd from "./components/FormAdd"
import List from "./components/List"
import './todo.css'


function Todo() {
    const [itemsDone, setItemsDone] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        if (localStorage.getItem("SaveItem") && localStorage.getItem("SaveItemDone")) {
            setItems(JSON.parse(localStorage.getItem("SaveItem")))
            setItemsDone(JSON.parse(localStorage.getItem("SaveItemDone")))
        }
    }, [])

    function AddItem(text) {

        let item = new Item(text)
        setItems([...items, item])


        let arr = items
        arr.push(item)
        localStorage.setItem("SaveItem", [JSON.stringify(arr)])


    }


    function onItemDeleted(item) {

        let filteredItems = items.filter(it => it.id !== item.id)

        setItems(filteredItems)

        let arr = filteredItems
        localStorage.setItem("SaveItem", [JSON.stringify(arr)])

    }

    function onItemDone(item) {
        item.done = true
        let filteredItems = items.filter(it => it.done == true)

        onItemDeleted(item)

        filteredItems.forEach((item) => {
            setItemsDone([...itemsDone, item])

            let arr = [...itemsDone, item]
            localStorage.setItem("SaveItemDone", [JSON.stringify(arr)])

        })


    }


    function onItemDeletedDone(item) {
        let filteredItems = itemsDone.filter(it => it.id !== item.id)

        setItemsDone(filteredItems)

        let arr = filteredItems
        localStorage.setItem("SaveItemDone", [JSON.stringify(arr)])

    }
    function clean() {
    }
    return (
        <div className='container'>
            <h1>Todo</h1>
            <FormAdd onAddItem={AddItem}></FormAdd>
            <List onItemDone={onItemDone} onItemDeletedDone={onItemDeletedDone} onItemDeleted={onItemDeleted} itemsDone={itemsDone} items={items}></List>
        </div>
    )
}
export default Todo