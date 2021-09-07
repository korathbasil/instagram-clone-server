import { hash, compare } from "bcryptjs";

export const hashPassword = (password: string) => {
  return hash(password, 10);
};

export const comparePasswords = async (
  password: string,
  encryptedPassword: string
) => {
  return await compare(password, encryptedPassword);
};
