import React from "react";
import "./Cons.css";
import Card from "./Card";

function CalorieContainer() {
  return (
    <div className="calorie-container">
      <h1 className="calorie-heading">Calories Read Only</h1>
      <div className="food-container">
        <Card foodName="Pizza" calories={56} />
        <Card foodName="Borgir" calories={56} />
        <Card foodName="Pani Puri" calories={56} />
        <Card foodName="Fried Rice" calories={56} />
        <Card foodName="Lasagna" calories={56} />
      </div>
    </div>
  );
}

export default CalorieContainer;
