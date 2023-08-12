import React, { useEffect, useState } from "react";
import ItemForSale from "./ItemForSale";
import axios from "axios";
import "./Shop.css";

const url = "http://localhost:8080/shop";

export default function Shop() {
  const [itemsForSale, setItemsForSale] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setItemsForSale(res.data));
  }, []);

  return (
    <div className="shop text-center">
      {itemsForSale.map((item, index) => (
        <ItemForSale
          className="item"
          name={item.name}
          desc={item.description}
          img={item.img}
          price={item.price}
          key={index}
        />
      ))}
    </div>
  );
}
