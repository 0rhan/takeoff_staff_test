import LoginForm from "./components/LoginForm/LoginForm";
import { requestUsers } from "./api/requestUsers";
import { UserCredentials, UsersList } from "./types";
import { FormEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useField } from "lib/formController/FormController";
import { checkUser } from "./utils/checkUser";
import { Dialog, DialogTitle } from "@mui/material";
import { AuthContext } from "providers/AuthContext";

const EntrancePage = () => {
  const { onChange: onLoginChange, fieldValue: loginValue } = useField();
  const { onChange: onPasswordChange, fieldValue: passwordValue } = useField();

  const { authentication, setAuthentication } = useContext(AuthContext);

  const [isWrongUser, setUserIsWrong] = useState(false);

  const navigate = useNavigate();

  const closeAlert = () => {
    setUserIsWrong(false);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const userCredentials: UserCredentials = {
      login: loginValue,
      password: passwordValue,
    };

    let users: UsersList | undefined;

    try {
      const response = await requestUsers();
      const { data } = response;
      users = data;
    } catch (error) {}
    if (users) {
      const isAuthenticated: boolean = checkUser(users, userCredentials);
      if (isAuthenticated) {
        setAuthentication(isAuthenticated);
        navigate("/contacts");
      } else {
        setUserIsWrong(true);
      }
    }
  };

  return (
    <>
      <Dialog open={isWrongUser} onClose={closeAlert}>
        <DialogTitle> Неправильный логин или пароль </DialogTitle>
      </Dialog>
      <LoginForm
        onSubmit={handleSubmit}
        onLoginChange={onLoginChange}
        onPasswordChange={onPasswordChange}
        loginValue={loginValue}
        passwordValue={passwordValue}
      />
    </>
  );
};

export default EntrancePage;

