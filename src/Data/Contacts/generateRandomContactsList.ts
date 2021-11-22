import generateRandomPerson from "./generateRandomPerson";
import { PersonModel } from "./types";

const generateRandomContactsList = (amount: number) => {
  let contactsList: Array<PersonModel> = [];
  for (let i = 0; i !== amount; i++) {
    const randomPerson = generateRandomPerson();

    contactsList.push(randomPerson);
  }

  return contactsList;
};

export default generateRandomContactsList;
