import faker from "faker";
import { PersonModel } from "./types";
import { v4 as uuid } from "uuid";

faker.locale = "en";
const { name, phone, address, company } = faker;

const getRandomPerson = async (): Promise<PersonModel> => {
  const randomPersonPromise = new Promise<PersonModel>((resolve) => {
    const user: PersonModel = {
      id: uuid(),
      firstName: name.firstName(),
      lastName: name.lastName(),
      country: address.county(),
      phone: phone.phoneNumber(),
      jobArea: name.jobArea(),
      jobPosition: name.jobType(),
      company: company.companyName(),
    };

    setTimeout(() => resolve(user), 0);
  });

  const randomPerson = await randomPersonPromise;

  return randomPerson;
};

export default getRandomPerson;
