"use client";
import { useState } from "react";

export default function CountQuantity(){
  const [quantity, setQuantity] = useState(1);

  const increment =()=>{
      setQuantity(quantity+1);
  };

  const decrement =()=>{
      setQuantity(quantity-1);    
  };

  return (
    <div>
      <p>Quantity: {quantity}</p>
      <button onClick={decrement} disabled={quantity === 1}>
        -
      </button>
      <button onClick={increment} disabled={quantity === 20}>
        +
      </button>
      <p>Allowed range: 1–20</p>
    </div>
  );
}