import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";

import "./Cart.css";
// import { loadCart } from "../utils/utils";

const url = "http://localhost:8080/cart";

const Cart = () => {
  const [items, setItems] = useState([]);

  // useEffect(loadCart(setItems), []);
  // useEffect(loadCart, []);

  useEffect(() => {
    axios.get(url).then((res) => setItems(res.data));
  }, []);

  return (
    <div className="cart">
      {items.map((item, index) => (
        <Item name={item.name} count={item.count} key={index} />
      ))}
    </div>
  );
};

// function loadCart() {
//   axios.get(url).then((res) => {
//     console.log(res.data);
//     // setItems(res.data);
//   });
// }

export default Cart;
