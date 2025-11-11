"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user === null) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (user === null) {
    return (
      <main className="p-8 text-center text-white">
        <h2>Checking authentication...</h2>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-white text-5xl text-center mb-6">
        {user.displayName ? `${user.displayName}'s Shopping List` : "Shopping List"}
      </h1>
      <div className="flex flex-row gap-8 ml-20 mr-20">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItems} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleItemSelect(name) {
    setSelectedItemName(name);
  }
}
