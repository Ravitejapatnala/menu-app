import React, { useState } from "react";
import menu from "./Data/menu";

function App() {
  const[category, setCategory]= useState(menu)

  function filterAllDishes(){
    setCategory(menu);
  }

  function filterBreakfastDishes(){
    setCategory(menu.filter((item)=>(
      item.category=='breakfast'?[...category, {item}]: ""
    )))
  }

  function filterLunchDishes(){
    setCategory(menu.filter((item)=>(
      item.category=='lunch' ? [...category, {item}]: ""
    )))
  }

  function filterShakes(){
    setCategory(menu.filter((item)=>(
      item.category=='shakes'?[...category, {item}]: ""
    )))
  }
  return (
    <div>
      <button onClick={filterAllDishes}>All</button>
      <button onClick={filterBreakfastDishes}>Breakfast</button>
      <button onClick={filterLunchDishes}>Lunch</button>
      <button onClick={filterShakes}>Shakes</button>
      
      {
        category && (
          <div>
            {
              category.map((item)=>(
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  <p>{item.desc}</p>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default App;
