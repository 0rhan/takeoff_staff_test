import {PersonProperty} from "../types/index"

// Объект для мапинга лейблов в форму
export const PERSON_LABELS: PersonProperty = {
  firstName: "First name",
  lastName: "Last name",
  phone: "Phone number",
  country: "Country",
  jobArea: "Area",
  jobPosition: "Position",
  company: "Company name",
} as const
