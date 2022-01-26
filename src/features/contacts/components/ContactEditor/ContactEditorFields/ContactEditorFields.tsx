import TextField from "@mui/material/TextField";
import { PERSON_LABELS } from "features/contacts/config";
import { PersonProperty, PersonInfo } from "features/contacts/types";
import { ChangeEventHandler } from "react";

interface ContactEditorFieldsProps {
  fields: PersonInfo;
  handleFieldChange: ChangeEventHandler<HTMLInputElement>;
}

const ContactEditorFields = ({
  fields,
  handleFieldChange,
}: ContactEditorFieldsProps) => {
  const personProperties = Object.keys(fields);

  // Не включать параметр id в поля формы
  const contactEditorFields = personProperties.filter(
    (personInfo) => personInfo !== "id"
  );

  const formFields = contactEditorFields.map((personInfoProperty) => {
    return (
      <TextField
        value={fields[personInfoProperty as keyof PersonProperty]}
        id={personInfoProperty}
        key={`${personInfoProperty}`}
        onChange={handleFieldChange}
        label={PERSON_LABELS[personInfoProperty as keyof PersonProperty]}
      />
    );
  });

  return <>{formFields}</>;
};

export default ContactEditorFields;
