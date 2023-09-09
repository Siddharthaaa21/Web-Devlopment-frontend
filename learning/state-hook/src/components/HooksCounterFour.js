import React, { useState } from 'react'

function HooksCounterFour() {
    const [items, setitems] = useState([])
    const additem = () => {
        setitems
            ([
                ...items,//spread operator
                {
                    id: items.length,
                    value: Math.floor(Math.random() * 10) + 1
                }])
    }
    return (
        <div>
            <button onClick={additem}>Add a num</button>
            <ul>
                {items.map(itmes => (<li key={items.id}>{items.value}</li>))}
            </ul>

        </div>
    )
}

export default HooksCounterFour
