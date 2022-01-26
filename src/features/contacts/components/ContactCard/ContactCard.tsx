import { ListItem, Card } from "@mui/material";
import { PersonModel } from "features/contacts/types";
import ContactCardHeader from "./ContactCardHeader/ContactCardHeader";
import ContactCardContent from "./ContactCardContent/ContactCardContent";

const ContactCard = ({ personInfo }: { personInfo: PersonModel }) => {
  return (
    <ListItem sx={{ display: "grid", gridTemplate: "1fr / 1fr" }}>
      <Card sx={{ display: "grid", width: "100%" }}>
        <ContactCardHeader personInfo={personInfo} />
        <ContactCardContent personInfo={personInfo} />
      </Card>
    </ListItem>
  );
};

export default ContactCard;
