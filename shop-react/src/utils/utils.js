// import React from "react";

import axios from "axios";

const url = "http://localhost:8080/cart";

export function loadCart(setItems) {
  axios.get(url).then((res) => {
    console.log(res.data);
    // setItems(res.data);
  });
}
