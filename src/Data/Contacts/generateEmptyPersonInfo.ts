import { v4 as uuid } from "uuid";
import { PersonModel } from "Data/Contacts/types";

const generateEmptyPersonInfo = () => {
  const emptyPersonInfo: PersonModel = {
    id: uuid(),
    firstName: "",
    lastName: "",
    country: "",
    phone: "",
    jobArea: "",
    jobPosition: "",
    company: "",
  };

  return emptyPersonInfo;
};

export default generateEmptyPersonInfo;
