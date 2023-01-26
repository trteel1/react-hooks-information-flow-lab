import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      <ul className="Items">
        <Filter setSelectedCategory={setSelectedCategory} parentItemToDisplay={handleCategoryChange}/>
      </ul>
    </div>
  );
        }