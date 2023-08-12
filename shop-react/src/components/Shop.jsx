import React, { useEffect, useState } from 'react'
import ItemForSale from './ItemForSale';
import axios from 'axios';

const url = "http://localhost:8080/shop";

export default function Shop() {

    const [itemsForSale, setItemsForSale] = useState([]);


    useEffect( () => {
        axios.get(url).then( res => setItemsForSale(res.data) );
    } ,[]);

  return (
    <div>
        {itemsForSale.map(
            (item, index) => 
            <ItemForSale  
            name={item.name} 
            desc={item.desc}
            img={item.img}
            price={item.price}
            key={index}/>
            )}
    </div>
  )
}

