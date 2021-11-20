import generateRandomPerson from "./generateRandomPerson";
import { PersonModel } from "./types";

const generateRandomContactsList = async (amount: number) => {
  const contactsPromise = new Promise<Array<PersonModel>>((resolve) => {
    let contactsList: Array<PersonModel> = [];
    for (let i = 0; i !== amount; i++) {
      const randomPerson = generateRandomPerson();

      contactsList.push(randomPerson);
    }
    resolve(contactsList);
  });

  const contacts = await contactsPromise;
  return contacts;
};

export default generateRandomContactsList;
