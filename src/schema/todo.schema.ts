import { object, string } from "zod";

export const createTodoSchema = object({
  body: object({
    title: string({
      required_error: "Title name is required",
    }),
    description: string({
      required_error: "Description name is required",
    }),
  }),
});
