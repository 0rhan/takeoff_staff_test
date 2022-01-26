import { FormControllerState, FormActions, ActionType } from "./types";

const formReducer = <Values>(
  state: FormControllerState<Values>,
  action: FormActions<Values>
) => {
  const { type } = action;
  const { fields, touched } = state;
  const newFields = { ...fields };

  switch (type) {
    // block-scope для устранения конфликта переменных 
    case ActionType.CHANGE: {
      const {
        fieldsEvent: { target },
      } = action;
      const fieldKey = target.id;
      const { value: fieldValue } = target;
      return {
        ...state,
        fields: {
          ...fields,
          [fieldKey]: fieldValue,
        },
      };
    }
    case ActionType.BLUR:
      const {
        fieldsEvent: { target },
      } = action;
      const fieldKey = target.id;
      if (fieldKey in newFields) {
        return {
          ...state,
          touched: {
            ...touched,
            [fieldKey]: true,
          },
        };
      }
      return {
        ...state,
      };
    case ActionType.VALIDATE:
      const { errors } = action;
      return {
        ...state,
        errors: {
          ...errors,
        },
      };
    default:
      return state;
  }
};

export default formReducer; 
