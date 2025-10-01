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
    <div className="w-75 flex-auto font bg-white text-black rounded-lg px-5 py-5 justify-self-center justify-items-start m-10" >
      <p className="text-lg font-bold">Quantity: {quantity}</p>
      <button onClick={decrement} disabled={quantity === 1} className="display: inline-block w-12 h-8 bg-gray-400 rounded-sm text-2xl disabled:text-gray-400 disabled:bg-gray-300" >
        -
      </button>
      <button onClick={increment} disabled={quantity === 20} className="display: inline-block w-12 h-8 bg-blue-500 rounded-sm text-2xl mx-2.5 disabled:text-gray-100 disabled:bg-blue-300 ">
        +
      </button>
      <p className="py-0.5 text-gray-500">Allowed range: 1–20</p>
    </div>
  );
}