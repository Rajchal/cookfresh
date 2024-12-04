"use client";

import React from "react";

interface props {
  meals: any[];
}

const Menu = () => {
  async function searchMeals(query: string) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    return data.meals;
  }
  function displayResults(meals: props) {
    if (meals) {
      meals.forEach((meal) => {
        const mealCard = `
                <div class="col-md-4 mb-4">
                    <div class="card" onclick="redirectToPage('${meal.strMeal}')">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                        </div>
                    </div>
                </div>
            `;
        searchResults.innerHTML += mealCard;
      });
    } else {
      searchResults.innerHTML =
        '<p class="text-center">No meals found. Try another search.</p>';
    }
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
            <displayResults />;
          }}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Menu;
