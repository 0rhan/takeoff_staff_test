import { PersonModel } from "../types/";

// Тип для полей формы без параметра "ID"
export type PersonInfo = Omit<PersonModel, "id">;

export type PersonProperty = {
  [Property in keyof PersonInfo]: any;
};

// Объект для мапинга лейблов в форму
export const personLabels: PersonProperty = {
  firstName: "First name",
  lastName: "Last name",
  phone: "Phone number",
  country: "Country",
  jobArea: "Area",
  jobPosition: "Position",
  company: "Company name",
};
