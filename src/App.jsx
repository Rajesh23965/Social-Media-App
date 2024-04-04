import FoodItems from "./components/FoodInput";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

export default function App() {
  let foodItems = ["Dahi", "Dal", "Bhat", "Tarkari", "Roti", "Gheu"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput />
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/*
      <Container>
        <p>
          Above is the list of healthy foods that are good htmlFor your health and
          well being.
        </p>
      </Container>
  */}
    </>
  );
}
