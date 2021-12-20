import { HttpError } from "./HttpError.ts";
import { Context } from "https://deno.land/x/oak@v10.0.0/context.ts";

export const handleError = async (
  { response }: Context,
  next: () => Promise<unknown>
): Promise<void> => {
  try {
    await next();
  } catch (err) {
    if (err instanceof HttpError) {
      response.status = err.code;
      response.body = {
        message: err.message,
        stack: err.stack,
      };
    } else {
      response.status = 500;
      response.body = { msg: err.message };
    }
  }
};
