"use client";

interface Meal {
  strMeal: string;
  strMealThumb: string;
}

export default async function FetchMenu(query: string) {
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
          <h5>{meal.strMeal}</h5>
        </div>
      ))}
    </>
  );
}
