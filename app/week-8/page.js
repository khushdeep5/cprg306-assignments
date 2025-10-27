"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItems = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleItemSelect = (name) => {
    setSelectedItemName(name);
  };

  return (
    <main className="p-8">
      <h1 className="text-white text-5xl text-center mb-6">Shopping List</h1>
      <div className="flex flex-row  gap-8 ml-20 mr-20">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItems} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 ">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
