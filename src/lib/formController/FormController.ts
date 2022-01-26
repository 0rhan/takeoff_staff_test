import {
  useReducer,
  ChangeEventHandler,
  FocusEventHandler,
  Reducer,
  useState,
} from "react";
import formReducer from "./formReducer";
import { FormControllerState, ActionType, FormActions } from "./types";

// контроллер для форм с большим кол-вом полей
export const useFormController = <Values>(params: any) => {
  const [state, setState] = useReducer<
    Reducer<FormControllerState<Values>, FormActions<Values>>
  >(formReducer, params);
  const { validate, fields } = state;

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setState({ type: ActionType.CHANGE, fieldsEvent: event });
  };

  const handleFieldBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setState({ type: ActionType.BLUR, fieldsEvent: event });

    if (validate) {
      const errors = validate(fields);
      setState({ type: ActionType.VALIDATE, errors: errors });
    }
  };

  const formController = {
    ...state,
    handleFieldChange,
    handleFieldBlur,
  };

  return formController;
};

// контроллер поля формы, для простых форм
export const useField = () => {
  const [fieldValue, setFieldValue] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;
    setFieldValue(value);
  };

  return {
    fieldValue,
    onChange,
  };
};
