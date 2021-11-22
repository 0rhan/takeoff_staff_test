import getRandomPerson from "./generateRandomPerson";
import { PersonModel } from "./types";

async function* asyncContactsGenerator(quantity: number) {
  for (let i = 0; i < quantity; ) {
    i++;
    const randomPerson = await getRandomPerson();
    yield randomPerson;
    if (i === quantity) {
      // Индикатор окончания генератора
      yield { done: true };
    }
  }
}

const generateRandomContactsList = async (quantity: number) => {
  let contactsList: Array<PersonModel> = [];
  for await (let randomPerson of asyncContactsGenerator(quantity)) {

    if (!("done" in randomPerson)) {
      contactsList.push(randomPerson);
    } else {
      return contactsList;
    }
  }
};

export default generateRandomContactsList;
