import React, { useState } from "react";

// Test data - Do not modify
const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true },
];

export default function App() {
  const [sales, setSales] = useState(0);

  let Items;
  if (sales) {
    Items = items.filter(function (item) {
      return item.onSale === true;
    });
  } else {
    Items = items;
  }

  function butt() {
    setSales(function (abc) {
      return !abc;
    });
  }

  return (
    <div>
      <h1 className="m-3">Shopping Cart</h1>
      <button className="btn btn-primary p-2 m-3" onClick={butt}>
        {sales ? "Show All Items" : "Show Sale Items Only"}
      </button>
      <div className="col">
        {Items.map(item => {
          return (
            <div className="p-4 d-flex justify-content-between">
              <b>
                {item.name} {item.onSale ? <b className="bg-danger text-white p-1">On Sale!</b> : ''}
              </b>
              <b>${item.price}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
}
