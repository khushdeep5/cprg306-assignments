/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";

// Fetch data from TheMealDB API
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      if (!ingredient) return;
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
    loadMealIdeas();
  }, [ingredient]);

  if (!ingredient) {
    return (
      <p className="text-center text-gray-300">
        Select an item to see meal ideas.
      </p>
    );
  }

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Meal ideas for {ingredient}
      </h2>
      {meals.length === 0 ? (
        <p className="text-gray-300">No meal ideas found.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="bg-gray-800 text-white rounded-lg shadow-md p-4"
            >
              <p className="font-semibold">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
