import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Cart.css";
import CartItem from "./CartItem";
// import { loadCart } from "../utils/utils";

const url = "http://localhost:8080/cart";

// const timeoutId;

const Cart = () => {
  const [items, setItems] = useState([]);

  // useEffect(loadCart(setItems), []);
  // useEffect(loadCart, []);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setItems(res.data))
      .catch(() => console.log("cant get cart from server"));
  }, []);

  // useEffect(() => {
  //   // wait 5 seconds
  //   setTimeout(() => {
  //     clearTimeout(this);
  //     axios.put(url, items);
  //   }, 5000);
  // }, items);

  // timeoutId = setTimeout(() => {
  //   saveCart();
  // }, 5*1000);

  return (
    <div className="cart m-3 p-3">
      {items.map((item) => (
        <CartItem
          id={item.id}
          className="text-center"
          item={item.item}
          count={item.count}
          key={item.id}
        />
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

// function updateCart() {
//   axios.put(url, items);
// }

export default Cart;
