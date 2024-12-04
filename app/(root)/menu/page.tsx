import React from "react";

const Menu = () => {
  async function searchMeals(query: string) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    return data.meals;
  }
  function displayResults(meals: any[]) {
    if (meals) {
      meals.forEach((meal) => {
        return (
          <div className="col-md-4 mb-4">
            <div className="card" onclick="redirectToPage('${meal.strMeal}')">
              <Image
                src="${meal.strMealThumb}"
                className="card-img-top"
                alt="${meal.strMeal}"
              />
              <div className="card-body">
                <h5 className="card-title">${meal.strMeal}</h5>
              </div>
            </div>
          </div>
        );
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
    </>
  );
};

export default Menu;
