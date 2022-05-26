import React from 'react'
import './Item.css'

function Item({imagen, nombre, id, precio, stock}) {
  return (
    <div className={cardContainer} key={id}>
    <img src={imagen} alt={nombre} className={componentsImg}/>
    <div className={cardInfo}>
        <h4><b>{nombre}</b></h4> 
        <p>$ {precio}</p> 
    </div>
    <ItemCount stock={stock}/>
    </div>
  )
}

export default Item