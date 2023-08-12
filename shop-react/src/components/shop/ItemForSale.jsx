import React from "react";
import "./ItemForSale.css";
import axios from "axios";

const url = "http://localhost:8080/cart";

export default function ItemForSale({ name, desc, price, img }) {
  return (
    <div className="item">
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{desc}</p>
      <span>{price}</span>
      <div className="btn-group">
        <button className="btn btn-outline-secondary" onClick={removeFromCart}>
          -
        </button>
        <button className="btn btn-outline-primary" onClick={addToCart}>
          +
        </button>
      </div>
    </div>
  );
}

function removeFromCart(e) {
  // axios.delete(cartUrl, { itemId: e.target.id });
}

function addToCart() {
  // axios.put(cartUrl, { itemId: e.target.id, count: count });
}
