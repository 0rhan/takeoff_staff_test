import { AppBar, Box, Toolbar } from "@mui/material";
import SearchContacts from "./SearchContacts/SearchContacts";

const ContactsToolBar = () => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "center" }}>
          <SearchContacts />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ContactsToolBar;
