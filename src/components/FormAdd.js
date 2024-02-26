import React, { useState } from 'react'

function FormAdd(props) {

    const [input, setInput] = useState("")


    function handleChange(event) {
        let t = event.target.value

        setInput(t)
    }

    function addItem(event) {
        event.preventDefault();
        if (input) {

            // setItems([...items, input])
            props.onAddItem(input)
            setInput(" ")
        }

    }

    return (localStorage.setItem("identificador", ident++),
        <form>
            <input value={input} onChange={handleChange} type='text'></input>
            <button onClick={addItem}>add</button>
        </form>
    )
}

export default FormAdd
export let ident = localStorage.getItem("identificador")