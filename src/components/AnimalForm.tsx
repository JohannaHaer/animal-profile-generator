import { Input } from "./Form/Input";
import React, { ChangeEvent } from "react";
import { Textarea } from "./Form/Textarea";
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
  images: File[];
}

export const AnimalForm = ({ animal, setAnimal }: AnimalFormProps) => {
  const handleOnFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAnimal((prevState: AnimalFormState) => {
      const fileList = event.target.files || [];
      const files = [];

      for (let index = 0; index < fileList?.length; index++) {
        files.push(fileList[index]);
      }

      return {
        ...prevState,
        images: files,
      };
    });
  };

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
      <Form.Group>
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
      </Form.Group>
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
      <Form.Select
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
      </Form.Select>
      <Form.Group>
        <Form.Check
          type="radio"
          label="Männlich"
          name="gender"
          value={"male" as AnimalGender}
          onChange={(event) => {
            setAnimal((prevState: AnimalFormState) => {
              return {
                ...prevState,
                gender: event.target.value as AnimalGender,
              };
            });
          }}
        />
        <Form.Check
          type="radio"
          label="Weiblich"
          name="gender"
          value={"female" as AnimalGender}
          onChange={(event) => {
            setAnimal((prevState: AnimalFormState) => {
              return {
                ...prevState,
                gender: event.target.value as AnimalGender,
              };
            });
          }}
        />
      </Form.Group>
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
      <Form.Group>
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
      </Form.Group>
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
      <Form.Group>
        <Form.Label>Bilder anhängen</Form.Label>
        <Form.Control type="file" multiple onChange={handleOnFileInputChange} />
      </Form.Group>
    </div>
  );
};
