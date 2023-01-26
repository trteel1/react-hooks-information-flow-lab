import React, { useState } from "react";

function Filter({setSelectedCategory, handleCategoryChange}){

    const parentItemToDisplay = (e) =>setSelectedCategory(e.target.value)

    return (
        <div className="Filter">
        <select name="filter" onChange={parentItemToDisplay}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

    )
}
export default Filter