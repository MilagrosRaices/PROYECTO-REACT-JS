import React, { useState } from 'react'

const ItemCount = (props) => {
 
    const [count, setCount] = useState(0)
    
    const decrement = () => {
        if(count > 0){ 
        setCount(count - 1)
        
    }else{
        alert("No has agregado productos a tu carrito")
    }
    }

    const increment = () => {
        if(count < 6 ){
            setCount(count + 1)
        }else{
            alert("Has sobrepasado la cantidad de limite del mismo producto")
        }
    }

    return(
        <div className='count'>
            <button onClick={decrement} style={{justifyContent: 'center'}}>-</button>
            <h1>{count}</h1> 
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount


