import { TextField, InputAdornment } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContactsContext } from "providers/ContactsContext";
import { filterContactsByFirstName } from "features/contacts/utils/filterContacts";

const SearchContacts = () => {
  const { contactsList, setFoundContactsList } = useContext(ContactsContext);

  const isSearchDisabled = contactsList && contactsList.length === 0;

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: searchString } = event.currentTarget;
    if (contactsList) {
      if (searchString) {
        const filteredContacts = filterContactsByFirstName(
          contactsList,
          searchString
        );
        setFoundContactsList(filteredContacts);
      } else {
        // Если поисковая строка пустая, то очистить коллекцию с найденными контактами
        setFoundContactsList(undefined);
      }
    }
  };

  return (
    <TextField
      type="search"
      disabled={isSearchDisabled}
      onChange={handleSearch}
      sx={{
        backgroundColor: "white",
        borderRadius: "4px",
      }}
      size="small"
      placeholder="Поиск"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchContacts;
