import styled from "@emotion/styled";
import { Button, Paper, TextField, Typography } from "@mui/material/";
import { ChangeEventHandler, FormEventHandler } from "react";

interface LoginFormProps {
  onPasswordChange: ChangeEventHandler<HTMLInputElement>;
  onLoginChange: ChangeEventHandler<HTMLInputElement>;
  passwordValue: string;
  loginValue: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const LoginForm = ({
  onLoginChange,
  onPasswordChange,
  onSubmit,
  loginValue,
  passwordValue,
}: LoginFormProps) => {

  const isFormEmpty = !(loginValue.trim() && passwordValue.trim())

  return (
    <FormContainer elevation={3}>
      <FormHeader variant="h5" align="center">
        Аутентификация
      </FormHeader>
      <Form onSubmit={onSubmit}>
        <TextField label="Логин" value={loginValue} onChange={onLoginChange} />
        <TextField
          label="Пароль"
          value={passwordValue}
          onChange={onPasswordChange}
        />
        <SubmitButton variant="contained" type="submit" disabled={isFormEmpty}>
          Вход
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;

const FormContainer = styled(Paper)`
  display: grid;
  grid-template: 1fr 3fr / minmax(310px, 420px);
  align-self: center;
  justify-self: center;
  justify-items: center;
  height: 400px;
`;

const FormHeader = styled(Typography)`
  display: grid;
  align-self: center;
`;

const Form = styled.form`
  display: grid;
  grid-template: repeat(2, max-content) min-content / max-content;
  align-content: space-evenly;
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
