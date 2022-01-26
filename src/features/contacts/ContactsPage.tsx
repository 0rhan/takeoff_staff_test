import { Container } from "@mui/material";
import generateRandomContactsList from "./utils/generateRandomContactsList";
import { useContext, useEffect } from "react";
import { ContactsContext } from "providers/ContactsContext";
import ContactEditor from "./components/ContactEditor/ContactEditor";
import ContactsToolBar from "./components/ContactsToolBar/ContactsToolBar";
import AddContactButton from "./components/AddContactButton/AddContactButton";
import ContactsList from "./components/ContactsList/ContactsList";
import ContactsLoader from "./components/ContactsLoader/ContactsLoader";

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
      <ContactsLoader isLoading={isLoading} />
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
