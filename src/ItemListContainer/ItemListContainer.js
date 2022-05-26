import React, { useEffect, useState } from 'react'
import CustomFetch from '../utils/CustomFetch';
import products from '../utils/products';
import ItemList from '../Item/ItemList';
import './ItemListContainer.css';


function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      CustomFetch(1000, products)
      .then(resultado => setItems(resultado))
      
  }, []);

  

return (
  <div>
      <ItemList products={items} />
  </div>
)
}

export default ItemListContainer

// const ItemListContainer = (props) => {
//       return <h1 className="ItemListContainer">{props.greeting}</h1>
// }
 