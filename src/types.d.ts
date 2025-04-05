interface AnimalKeeper {
  firstName: string;
  lastName: string;
  email: string;
}

interface Animal {
  animalId: string;
  name: string;
  type: AnimalType;
  breed: string;
  furColor: string;
  age: number;
  gender: string;
  isCastrated: boolean;
  note: string;
  description: string;
  image: File | null;
}

type AnimalGender = 'male' | 'female'

type AnimalType = 'Dog'|'Cat'