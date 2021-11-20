import { Typography } from "@mui/material";
import List from "@mui/material/List";
import { ContactsListType } from "Data/Contacts/types/";
import ContactCard from "../ContactCard/ContactCard";

interface ContactsListProps {
  contactsList: ContactsListType | undefined;
  emptyListMessage: string;
}

const ContactsList = ({
  contactsList,
  emptyListMessage,
}: ContactsListProps) => {
  if (contactsList && contactsList.length) {
    const contacts = contactsList.map((personInfo) => (
      <ContactCard key={personInfo.id} personInfo={personInfo} />
    ));
    return <List>{contacts}</List>;
  }

  return (
    <Typography variant="h3" align="center" sx={{ color: "gray" }}>
      {emptyListMessage}
    </Typography>
  );
};

export default ContactsList;
