import { ContactsListType, PersonModel } from "Data/Contacts/types";
import {
  ReactNode,
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";

export const ContactsContext = createContext<ContactsProviderType>(null!);

interface ContactsProviderType {
  contactsList: ContactsListType | undefined;
  setContactsList: Dispatch<SetStateAction<ContactsListType | undefined>>;
  foundContactsList: ContactsListType | undefined;
  setFoundContactsList: Dispatch<SetStateAction<ContactsListType | undefined>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  currentPerson: PersonModel | undefined;
  setCurrentPerson: Dispatch<SetStateAction<PersonModel | undefined>>;
  editorMode: "EDIT" | "ADD";
  setEditorMode: Dispatch<SetStateAction<"EDIT" | "ADD">>;
}

const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [contactsList, setContactsList] = useState<ContactsListType>();

  const [foundContactsList, setFoundContactsList] =
    useState<ContactsListType>();

  const [isLoading, setIsLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [currentPerson, setCurrentPerson] = useState<PersonModel | undefined>();

  const [editorMode, setEditorMode] = useState<"EDIT" | "ADD">("EDIT");

  const contextValue = {
    contactsList,
    foundContactsList,
    isLoading,
    setContactsList,
    setFoundContactsList,
    setIsLoading,
    isOpen,
    setIsOpen,
    currentPerson,
    setCurrentPerson,
    editorMode,
    setEditorMode,
  };

  return (
    <ContactsContext.Provider value={contextValue}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
