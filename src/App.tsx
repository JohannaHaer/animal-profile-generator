import { useState } from "react";
import { Button } from "./components/Form/Button";
import { AnimalKeeperForm } from "./components/AnimalKeeperForm";
import { AnimalForm, AnimalFormState } from "./components/AnimalForm";

function App() {
  const [animalKeeper, setAnimalKeeper] = useState<AnimalKeeper>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [animal, setAnimal] = useState<AnimalFormState>({
    animalId: "",
    name: "",
    type: undefined,
    breed: "",
    furColor: "",
    age: undefined,
    gender: undefined,
    isCastrated: false,
    note: "",
    description: "",
  });

  return (
    <div className="flex flex-col">
      <div className="flex">
        <AnimalKeeperForm
          animalKeeper={animalKeeper}
          setAnimalKeeper={setAnimalKeeper}
        />
        <AnimalForm animal={animal} setAnimal={setAnimal} />
      </div>
      <Button text="Absenden" onClick={() => console.log(animalKeeper)}/>
    </div>
  );
}

export default App;
