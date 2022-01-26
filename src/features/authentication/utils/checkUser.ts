import { UsersList, UserCredentials } from "../types";

export const checkUser = (
  users: UsersList,
  credentials: UserCredentials
): boolean => {
  const { login, password } = credentials;

  // check user login
  const user = users.find((user) => login === user.login);

  if (user) {
    const isPasswordCorrect: boolean = password === user.password;
    // password checking result
    return isPasswordCorrect;
  } else {
    // user not found
    return false;
  }
};
