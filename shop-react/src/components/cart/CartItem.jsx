import React from "react";
import "./CartItem.css";

const CartItem = ({ item, count }) => (
  <div className="container">
    <span className="name">{item.name}</span>
    <span className="count">{count}</span>
    <div className="btn-group">
      <button className="btn btn-secondary">-</button>
      <button className="btn btn-primary">+</button>
    </div>
    <button className="btn btn-danger">del</button>
  </div>
);

export default CartItem;
