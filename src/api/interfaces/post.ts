import { User } from "../models";

export interface IPostInput {
  image: string;
  caption: string;
  user?: User;
}
