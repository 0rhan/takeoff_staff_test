import {  Container } from "@mui/material";
import generateRandomContactsList from "Data/Contacts/generateRandomContactsList";
import { useContext, useEffect } from "react";
import { ContactsContext } from "State/Contexts/ContactsContext";
import ContactEditor from "./ContactEditor/ContactEditor";
import ContactsToolBar from "./ContactsToolBar/ContactsToolBar";
import AddContactButton from "./AddContactButton/AddContactButton";
import ContactsList from "./ContactsList/ContactsList";
import ContactsLoader from "./ContactsLoader/ContactsLoader";

const ContactsPage = () => {
  const {
    contactsList,
    foundContactsList,
    setContactsList,
    setIsLoading,
    isLoading,
    setIsOpen,
    setEditorMode,
  } = useContext(ContactsContext);

  useEffect(() => {
    const getContacts = async () => {
      setIsLoading(true);
      const contacts = await generateRandomContactsList(20);
      setIsLoading(false);
      setContactsList(contacts);
    };

    getContacts();
  }, []);


  return (
    <>
      <ContactsLoader isLoading={isLoading}/>
      <ContactsToolBar />
      <Container sx={{ display: "grid", paddingTop: "60px" }}>
        <ContactEditor />
        {/* Отображать список в зависимости от того активен ли поиск*/}
        {foundContactsList ? (
          <ContactsList
            emptyListMessage={"Ничего не найдено"}
            contactsList={foundContactsList}
          />
        ) : (
          <ContactsList
            emptyListMessage={"Список пуст"}
            contactsList={contactsList}
          />
        )}
        <AddContactButton setIsOpen={setIsOpen} setEditorMode={setEditorMode} />
      </Container>
    </>
  );
};

export default ContactsPage;
