import React from "react";
import "./ItemForSale.css";
import axios from "axios";

const url = "http://localhost:8080/cart";

export default function ItemForSale({ id, name, desc, price, img }) {
  return (
    <div className="item border border-primary m-3 p-4">
      <h2>{name}</h2>
      {/* className="img-fluid" */}
      <img src={img} alt={name} />
      <p>{desc}</p>
      <span>{price}$</span>
      <div className="btn-group">
        <button className="btn btn-outline-secondary" onClick={removeFromCart}>
          -
        </button>
        <button
          className="btn btn-outline-primary"
          value={id}
          onClick={addToCart}
        >
          +
        </button>
      </div>
    </div>
  );
}
function addToCart(event) {
  // axios.put(cartUrl, { itemId: e.target.id, count: count });
  // axios.post(CART_URL, {});
  axios.post(url, null, {
    params: {
      itemId: parseInt(event.target.value),
      count: 1,
    },
  });

  // Service.addToCart(id, 1);
}

function removeFromCart(e) {
  // axios.delete(cartUrl, { itemId: e.target.id });
}
