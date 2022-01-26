import { CardHeader, Avatar, IconButton, Typography } from "@mui/material";
import { ContactsContext } from "providers/ContactsContext";
import { HighlightOff, Edit } from "@mui/icons-material";
import { MouseEvent, useContext } from "react";
import { PersonModel } from "features/contacts/types";

type ButtonMouseEvent = MouseEvent<HTMLButtonElement>;

const ContactsCardHeader = ({ personInfo }: { personInfo: PersonModel }) => {
  const {
    setIsOpen,
    setCurrentPerson,
    contactsList,
    setContactsList,
    setEditorMode,
  } = useContext(ContactsContext);

  const { firstName, lastName, id } = personInfo;

  const openContactEditor =
    (personInfo: PersonModel) => (event: ButtonMouseEvent) => {
      setCurrentPerson(personInfo);
      setIsOpen(true);
      setEditorMode("EDIT");
    };

  const deleteContact = (id: string) => (event: ButtonMouseEvent) => {
    if (contactsList) {
      const newList = contactsList.filter(
        (personInfo: PersonModel) => id !== personInfo.id
      );
      setContactsList(newList);
    }
  };

  return (
    <CardHeader
      disableTypography
      title={
        <Typography variant="h5">
          {firstName} {lastName}
        </Typography>
      }
      avatar={
        <Avatar sx={{ width: 56, height: 56 }}>
          {firstName.charAt(0).toUpperCase()}
        </Avatar>
      }
      action={
        <>
          <IconButton onClick={openContactEditor(personInfo)}>
            <Edit />
          </IconButton>
          <IconButton onClick={deleteContact(id)}>
            <HighlightOff />
          </IconButton>
        </>
      }
    ></CardHeader>
  );
};

export default ContactsCardHeader;
