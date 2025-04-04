import React from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import FormSelect from "react-bootstrap/FormSelect";
import Form from "react-bootstrap/Form";

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
  isCastrated: boolean;
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
      <Form>
        <Form.Check
          type="radio"
          label="Hund"
          name="type"
          value={"Dog" as AnimalType}
          onChange={(event) => {
            setAnimal((prevState: AnimalFormState) => {
              return {
                ...prevState,
                type: event.target.value as AnimalType,
              };
            });
          }}
        />
        <Form.Check
          type="radio"
          label="Katze"
          name="type"
          value={"Cat" as AnimalType}
          onChange={(event) => {
            setAnimal((prevState: AnimalFormState) => {
              return {
                ...prevState,
                type: event.target.value as AnimalType,
              };
            });
          }}
        />
      </Form>
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
      <FormSelect
        onChange={(event) => {
          setAnimal((prevState: AnimalFormState) => {
            return {
              ...prevState,
              age: Number(event.target.value),
            };
          });
        }}
      >
        <option value={undefined} disabled={animal.age != undefined}>
          Alter auswählen
        </option>
        {Array.from({ length: 100 }, (_, index) => index).map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </FormSelect>
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
      <Form>
        <Form.Check
          label="Ist kastriert"
          value={Number(animal.isCastrated)}
          onChange={(newValue) => {
            setAnimal((prevState: AnimalFormState) => {
              return {
                ...prevState,
                isCastrated: Boolean(newValue),
              };
            });
          }}
        />
      </Form>
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
