import AnimalShow from "./AnimalShow";

function RenderAnimals({ animals }) {
  return animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
}

export default RenderAnimals;
