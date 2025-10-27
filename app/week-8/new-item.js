"use client";
import { useState } from "react";

export default function NewItem({onAddItem }) {
  // State variables
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  // incrememnt and decrement
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  // form submit handles
  const handleSubmit = (event) => {
    event.preventDefault();

    const newitem = {
      id:Math.random().toString(),
      name: name,
      quantity: quantity,
      category: category,
    };
    
    onAddItem(newitem);
    setName("");
    setQuantity(1);
    setCategory("Produce");

    
  };

  return (
    <div className="w-90 font bg-white text-black rounded-lg px-5 py-5 justify-self-center justify-items-start m-5">
      <div>
        <label className="text-lg text-gray-800">Name</label>
        <input
          type="text"
          value={name}
          onChange={(input) => setName(input.target.value)}
          placeholder="Enter the item name"
          className=" text-black block  h-10 bg-white rounded-sm px-5 py-5 border border-gray-300 mb-2"
        />
      </div>
      <div>
        <p className="text-lg text-gray-800">Qunatity</p>
        <p className="text-md text-gray-700">Current: {quantity}</p>
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="display: inline-block w-12 h-8 bg-gray-400 rounded-sm text-2xl disabled:text-gray-400 disabled:bg-gray-300"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="display: inline-block w-12 h-8 bg-blue-500 rounded-sm text-2xl mx-2.5 disabled:text-gray-100 disabled:bg-blue-300 mb-1"
        >
          +
        </button>
        <p className="py-0.5 text-gray-500 mb-1.5 text-sm">
          Allowed range: 1–20
        </p>
      </div>
      <div>
        <label className="text-lg text-gray-800">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mb-2 block w-75 h-10"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-green-500 text-white font-bold rounded px-4 py-2 hover:bg-green-600 "
      >
        {" "}
        Submit
      </button>
    </div>
  );
}
