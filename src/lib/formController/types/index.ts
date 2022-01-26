import { ChangeEvent, FocusEvent } from "react";

export type FormControllerFields<Values> = {
  [Property in keyof Values]: any;
};

export interface FormControllerState<Values> {
  fields: Values;
  validate?: (values: Values) => FormErrors<Values>;
  touched?: {
    [fieldName: string]: boolean;
  };
  errors?: {
    [fieldName: string]: string;
  };
}

type FormErrors<Value> = {
  [Property in keyof Value]: string;
};

export enum ActionType {
  CHANGE = "CHANGE",
  BLUR = "BLUR",
  VALIDATE = "VALIDATE",
  RESET = "RESET",
}

export type FormActions<Value> =
  | {
      type: ActionType.CHANGE | ActionType.BLUR;
      fieldsEvent: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>;
    }
  | {
      type: ActionType.VALIDATE;
      errors: FormErrors<Value>;
    };

