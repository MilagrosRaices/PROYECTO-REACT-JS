import React from 'react'
import Item from './Item/Item'
import './Item.css'

function ItemList ({products}) {
    return (
        products.map(p => (
            <Item

            key={id}
            nombre={nombre}
            imagen={imagen}
            precio={precio}
            stock={stock}
            />
        )
    )
    )
}

export default ItemList