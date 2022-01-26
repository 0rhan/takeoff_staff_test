export interface UserModel {
  login: string;
  id: number;
  name: string;
  password: string;
}

export interface UserCredentials {
  login: string;
  password: string;
}

export type UsersList = Array<UserModel>;

