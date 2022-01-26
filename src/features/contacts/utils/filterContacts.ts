import { ContactsListType } from "../types";

export const filterContactsByFirstName = (
  contactsList: ContactsListType,
  firstName: string
) => {
  const filteredContacts = contactsList.filter((personInfo) => {
    if (personInfo.firstName.match(firstName)) return personInfo;
    return false;
  });
  return filteredContacts;
};
