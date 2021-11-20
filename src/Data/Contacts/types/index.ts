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
