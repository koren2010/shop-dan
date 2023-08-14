import React, { useEffect, useState } from "react";
import ItemForSale from "./ItemForSale";
import axios from "axios";
import "./Shop.css";

const url = "http://localhost:8080/shop";

export default function Shop() {
  const [itemsForSale, setItemsForSale] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setItemsForSale(res.data))
      .catch(() => console.log("cant get items from server"));
  }, []);

  return (
    // {items ? : }
    <div className="shop container-fluid text-center justify-content-center">
      {/* <div className="row"> */}
      {itemsForSale.map((item) => (
        <ItemForSale
          className="item col"
          name={item.name}
          desc={item.description}
          img={item.img}
          price={item.price}
          key={item.id}
        />
      ))}
      {/* </div> */}
    </div>
  );
}
