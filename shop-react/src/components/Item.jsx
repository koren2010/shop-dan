import React from "react";
import "./Item.css";

const Item = ({ name, count }) => (
  <div className="container">
    <span className="name">{name}</span>
    <span className="count">{count}</span>
    <button className="btn btn-secondary">-</button>
    <button className="btn btn-primary">+</button>
    <button className="btn btn-danger">del</button>
  </div>
);

export default Item;
