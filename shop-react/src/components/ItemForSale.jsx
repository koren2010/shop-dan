import React from 'react'
import "./ItemForSale.css"

export default function ItemForSale( { name, desc, price, img } ) {
  return (
    <div>
        <h2>{name}</h2>
        <img src={img} alt={name} />
        <p>{desc}</p>
        <span>{price}</span>
        <button>-</button>
        <button>+</button>
    </div>
  )
}

