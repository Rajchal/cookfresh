"use client";

interface Meal {
  strMeal: string;
  strMealThumb: string;
}

const FetchMenu = (query: string) => {
  const dat = searchMeal(query);
  console.log(dat);
};

const searchMeal = async (query: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const data = await response.json();
  return data.meals;
};
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
export default FetchMenu;
