import faker from "faker";
import { PersonModel } from "./types";
import { v4 as uuid } from "uuid";

faker.locale = "en";
const { name, phone, address, company } = faker;

const generateRandomPerson = (): PersonModel => {
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
  return user;
};

export default generateRandomPerson;
