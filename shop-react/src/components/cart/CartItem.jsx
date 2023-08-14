import React from "react";
import "./CartItem.css";

const CartItem = ({ item, count }) => (
  <div className="container border">
    <span className="name">{item.name}</span>
    <span className="count">{count}</span>
    <span className="total-price">{item.price * count}$ </span>
    <div className="btn-group">
      <button className="btn btn-secondary">-</button>
      <button className="btn btn-primary">+</button>
    </div>
    <button className="btn btn-danger">del</button>
  </div>
);

export default CartItem;
