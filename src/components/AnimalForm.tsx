import React from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

type AnimalFormProps = {
  animal: AnimalFormState;
  setAnimal: React.Dispatch<React.SetStateAction<AnimalFormState>>;
};

export interface AnimalFormState {
  animalId: string;
  name: string;
  type: AnimalType | undefined;
  breed: string;
  furColor: string;
  age: number | undefined;
  gender: AnimalGender | undefined;
  isCastrated: boolean | undefined;
  note: string;
  description: string;
}

export const AnimalForm = ({ animal, setAnimal }: AnimalFormProps) => {
  return (
    <div>
      <Input
        label="Tier-ID"
        value={animal.animalId}
        onChange={(newValue) => {
          setAnimal((prevState: AnimalFormState) => {
            return {
              ...prevState,
              animalId: newValue,
            };
          });
        }}
      />
      <Input
        label="Name"
        value={animal.name}
        onChange={(newValue) => {
          setAnimal((prevState: AnimalFormState) => {
            return {
              ...prevState,
              name: newValue,
            };
          });
        }}
      />
      <Input
        label="Rasse"
        value={animal.breed}
        onChange={(newValue) => {
          setAnimal((prevState: AnimalFormState) => {
            return {
              ...prevState,
              breed: newValue,
            };
          });
        }}
      />
      <Input
        label="Fellfarbe"
        value={animal.furColor}
        onChange={(newValue) => {
          setAnimal((prevState: AnimalFormState) => {
            return {
              ...prevState,
              furColor: newValue,
            };
          });
        }}
      />
      <Textarea
        label="Besondere Anmerkung"
        value={animal.note}
        onChange={(newValue) => {
            setAnimal((prevState: AnimalFormState) => {
              return {
                ...prevState,
                note: newValue,
              };
            });
          }}
      />
      <Textarea
        label="Beschreibung"
        value={animal.description}
        onChange={(newValue) => {
            setAnimal((prevState: AnimalFormState) => {
              return {
                ...prevState,
                description: newValue,
              };
            });
          }}
      />
    </div>
  );
};
