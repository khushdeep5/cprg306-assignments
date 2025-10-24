"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import React, {useState} from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItems =( item) =>{
    setItems((prevItems) => [...prevItems, item]);
  }


  return(
    <main>
    <h1 className="text-white text-5xl text-center">Shopping List</h1>
    <NewItem onAddItem={handleAddItems} />    
    <ItemList items={items}/>

    </main>
  );
}