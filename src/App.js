import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
import RenderAnimals from "./RenderAnimals";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  // const renderedAnimals = animals.map((animal, index) => {
  //   return <AnimalShow type={animal} key={index} />;
  // });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animals</button>
      {/* <div className="animal-list">{renderedAnimals}</div> */}
      <div className="animal-list">
        <RenderAnimals animals={animals} />
      </div>
    </div>
  );
}

export default App;
