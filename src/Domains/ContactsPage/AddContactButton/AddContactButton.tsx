import { Dispatch, MouseEvent, SetStateAction } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type ButtonMouseEvent = MouseEvent<HTMLButtonElement>;

interface AddContactButtonProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setEditorMode: Dispatch<SetStateAction<"EDIT" | "ADD">>;
}

const AddContactButton = ({
  setIsOpen,
  setEditorMode,
}: AddContactButtonProps) => {
  const openContactAddForm = (event: ButtonMouseEvent) => {
    setEditorMode("ADD");
    setIsOpen(true);
  };

  return (
    <Fab
      onClick={openContactAddForm}
      color="primary"
      sx={{
        display: "grid",
        justifySelf: "end",
        position: "sticky",
        bottom: 16,
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddContactButton;
