import React from 'react';
import { Input } from "./Form/Input";

type AnimalKeeperFormProps = {
    animalKeeper: AnimalKeeper;
    setAnimalKeeper: React.Dispatch<React.SetStateAction<AnimalKeeper>>
}

export const AnimalKeeperForm = ({animalKeeper, setAnimalKeeper}:AnimalKeeperFormProps) => {
  return (
    <div className='flex flex-col gap-6'>
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
    </div>
  )
}