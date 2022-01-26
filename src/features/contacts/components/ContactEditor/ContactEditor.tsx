import { useContext } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import ContactEditorForm from "./ContactEditorForm/ContactEditorForm";
import { ContactsContext } from "providers/ContactsContext";

const ContactEditor = () => {
  const { setIsOpen, isOpen, editorMode, currentPerson, setCurrentPerson } =
    useContext(ContactsContext);

  const closeForm = () => {
    setIsOpen(false);
    setCurrentPerson(undefined);
  };

  const dialogTitle =
    editorMode === "EDIT" ? "Редактировать контакт" : "Добавить контакт";

  return (
    <Dialog open={isOpen} onClose={closeForm}>
      <DialogTitle sx={{ textAlign: "center" }}>{dialogTitle}</DialogTitle>
      <DialogContent>
        <ContactEditorForm personInfo={currentPerson} closeForm={closeForm} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactEditor;
