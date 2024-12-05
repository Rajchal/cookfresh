"use client";

import Image from "next/image";
import { Props } from "next/script";
import React from "react";

interface Meal {
  strMeal: string;
  strMealThumb: string;
}

interface Props {
  meals: Meal[];
}

const Menu = () => {
  async function searchMeals(query: string) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    displayResults(data.meals);
  }
  function displayResults({ meals }: Props) {
    return (
      <>
        if (meals){" "}
        {meals.forEach((meal) => (
          <div>
            <div>
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
          </div>
        ))}
        else
        {<p className="text-center">No meals found. Try another search.</p>}
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
    </>
  );
};

export default Menu;
