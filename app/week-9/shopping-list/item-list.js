"use client";
import Item from "./item";
import React, { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const handleSelect = (name) => {
    const Namearr = name.split(",");
    const cleanName= Namearr[0];
    onItemSelect(cleanName);
  };

  let sortedItems = [...items];
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div className="p-4">
      <div className="flex gap-3 mb-6 justify-center">
       <button
  aria-pressed={sortBy === "name"}
  onClick={() => setSortBy("name")}
  className="bg-blue-400 h-10 rounded-2xl text-sm px-5 aria-pressed:bg-blue-600"
>
  Sort by Name
</button>
        <button
          onClick={() => setSortBy("category")}
          className="bg-blue-400 h-10 rounded-2xl text-sm px-5 focus:bg-blue-600"
        >
          Sort by Category
        </button>
      </div>

      <div className="grid gap-2 w-full" >
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
}
