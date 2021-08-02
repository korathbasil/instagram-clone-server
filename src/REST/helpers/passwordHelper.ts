import { hash, compare } from "bcryptjs";

export const hashPassword = (password: string) => {
  return hash(password, 10);
};

export const comparePasswords = (
  password: string,
  encryptedPassword: string
) => {
  return compare(password, encryptedPassword);
};
