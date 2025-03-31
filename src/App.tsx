import { useState } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

interface AnimalKeeper {
  firstName: string;
  lastName: string;
  email: string;
}

function App() {
  const [animalKeeper, setAnimalKeeper] = useState<AnimalKeeper>({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <>
      <form action="" className="flex flex-col gap-6">
        <Input
          label="Vorname"
          value={animalKeeper.firstName}
          onChange={(newValue) => {
            setAnimalKeeper((prevState: AnimalKeeper) => {
              return {
                ...prevState,
                firstName: newValue,
              };
            });
          }}
        />
        <Input
        label="Nachname"
        value={animalKeeper.lastName}
        onChange={(newValue) => {
          setAnimalKeeper((prevState: AnimalKeeper) => {
            return {
              ...prevState,
              lastName: newValue,
            };
          });
        }}
      />
      <Input
        label="E-Mail"
        value={animalKeeper.email}
        onChange={(newValue) => {
          setAnimalKeeper((prevState: AnimalKeeper) => {
            return {
              ...prevState,
              email: newValue,
            };
          });
        }}
      />
      <Button
        text='Absenden'
        onClick={() => console.log(animalKeeper)}
      />
      </form>
    </>
  );
}

export default App;
