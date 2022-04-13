import { Id } from "convex-dev/values";

export type Post = {
  _id: Id; // convex-assigned id
  title: string;
  date: number; // unix ms
  votes: number;
};
