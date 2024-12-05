"use client";

import Image from "next/image";
import React from "react";

interface Meal {
  strMeal: string;
  strMealThumb: string;
}

const Menu = () => {
  async function searchMeals(query: string) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    console.log(data.meals);
    displayResults(data.meals);
  }
  function displayResults(meals: Meal[]) {
    return (
      <>
        {meals.map((meal) => (
          <div key={meal.strMeal}>
            <Image
              src={meal.strMealThumb}
              width={50}
              height={50}
              alt={meal.strMeal}
            />
            <div>
              <h5>${meal.strMeal}</h5>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <p className="text-easyy border border-t-[95px] p-16 text-center text-logo-100 ">
        Explore Our Menu
      </p>
      <form className="mt-10 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search for meals"
          className="h-[50px] w-[300px] rounded-md border border-black p-2"
        />
        <button
          className="rounded-md bg-logo-100 p-2 text-white"
          onClick={(e) => {
            e.preventDefault();
            const query = (
              document.querySelector('input[type="text"]') as HTMLInputElement
            ).value;
            searchMeals(query);
          }}
        >
          Search
        </button>
      </form>
      <div>
        <displayResults meals={searchMeals("apple")} />
      </div>
    </>
  );
};

export default Menu;
