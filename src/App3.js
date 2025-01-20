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
  const Items = sales ? items.filter(item => item.onSale) : items;
  const butt= () => {
    setSales(!sales);
  };
  return (
    <div>
      <h1 className="p-2">Shopping Cart</h1>
      <button className= "btn btn-primary p-2 m-2" onClick={butt}>
          {sales ? "Show All Items" : "Show Sale Items Only"}
        </button>
      <div className="col">
          {Items.map(item => (
            <div className ="p-3">
              {item.name} {item.onSale && <b className="bg-danger text-white p-1">On Sale!</b>} - ${item.price}
            </div>
          ))}
        </div>
     </div>
  );
}

