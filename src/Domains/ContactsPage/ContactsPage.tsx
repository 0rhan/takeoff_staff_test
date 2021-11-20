import { Backdrop, CircularProgress, Container } from "@mui/material";
import generateRandomContactsList from "Data/Contacts/generateRandomContactsList";
import { useContext, useEffect } from "react";
import { ContactsContext } from "State/Contexts/ContactsContext";
import ContactEditor from "./ContactEditor/ContactEditor";
import ContactsToolBar from "./ContactsToolBar/ContactsToolBar";
import AddContactButton from "./AddContactButton/AddContactButton";
import ContactsList from "./ContactsList/ContactsList";

const ContactsPage = () => {
  const {
    isLoading,
    setIsLoading,
    contactsList,
    foundContactsList,
    setContactsList,
    setIsOpen,
    setEditorMode,
  } = useContext(ContactsContext);

  useEffect(() => {
    const getContacts = async () => {
      setIsLoading(true);
      const contacts = await generateRandomContactsList(8);
      setIsLoading(false);
      if (contacts) {
        setContactsList(contacts);
      }
    };

    getContacts();
  }, [setContactsList, setIsLoading]);

  return (
    <>
      <Backdrop open={isLoading} sx={{ zIndex: 1 }}>
        <CircularProgress color="primary" />
      </Backdrop>
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
