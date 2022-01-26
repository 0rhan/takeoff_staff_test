import axios from "axios";
import { UsersList } from "../types";

export const requestUsers = async () => {
  const response = await axios.get<UsersList>("/users/", {
    baseURL: "http://localhost:3002",
  });
  return response;
};
