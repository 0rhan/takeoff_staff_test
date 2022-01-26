export interface PersonModel {
  id: string;
  firstName: string;
  lastName: string;
  country: string;
  phone: string;
  jobArea: string;
  jobPosition: string;
  company: string;
}

export type ContactsListType = Array<PersonModel>;

// Тип для полей формы без параметра "ID"
export type PersonInfo = Omit<PersonModel, "id">;

export type PersonProperty = {
  [Property in keyof PersonInfo]: any;
};
