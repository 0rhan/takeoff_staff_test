import styled from "@emotion/styled";
import { FormEvent, useContext } from "react";
import { Button } from "@mui/material";
import ContactEditorFields from "../ContactEditorFields/ContactEditorFields";
import { useFormController } from "lib/FormController/FormController";
import { ContactsContext } from "State/Contexts/ContactsContext";
import generateEmptyPersonInfo from "Data/Contacts/generateEmptyPersonInfo";
import { PersonModel } from "Data/Contacts/types";
import { FormControllerFields } from "lib/FormController/types";

interface ContactEditorFormProps {
  personInfo: PersonModel | undefined;
  closeForm: () => void;
}

const ContactEditorForm = ({
  personInfo = generateEmptyPersonInfo(),
  closeForm,
}: ContactEditorFormProps) => {
  const { fields, handleFieldChange } = useFormController<
    FormControllerFields<PersonModel>
  >({
    fields: {
      ...personInfo,
    },
  });

  const {
    contactsList,
    setContactsList,
    setIsOpen,
    editorMode,
    setCurrentPerson,
  } = useContext(ContactsContext);

  const saveEditedContact =
    (editedPerson: PersonModel) => (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const newContactsList = contactsList?.map((personInfo) => {
        if (editedPerson.id === personInfo.id) {
          return editedPerson;
        }
        return personInfo;
      });

      setContactsList(newContactsList);
      setIsOpen(false);
      setCurrentPerson(undefined);
    };

  const addNewContact =
    (newPerson: PersonModel) => (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (contactsList) {
        const newContactsList = [newPerson, ...contactsList];

        setContactsList(newContactsList);
        setIsOpen(false);
      }
    };

  const submitMode =
    editorMode === "EDIT" ? saveEditedContact(fields) : addNewContact(fields);

  return (
    <Form onSubmit={submitMode}>
      <ContactEditorFields
        fields={fields}
        handleFieldChange={handleFieldChange}
      />
      <ActionButtonsContainer>
        <Button type="submit">Сохранить</Button>
        <Button onClick={closeForm}>Закрыть</Button>
      </ActionButtonsContainer>
    </Form>
  );
};

export default ContactEditorForm;

const Form = styled.form`
  display: grid;
  padding-top: 10px;
  gap: 10px;
  grid-template: 1fr / max-content
`;

const ActionButtonsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`
