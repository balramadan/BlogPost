import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const method = getMethod(event);

  // TODO - Add API for login from supabase
  try {
    if (method === "POST") {
      const body = await readBody(event);
      const { email, password } = body;

      if (!email || !password) {
        return sendError(
          event,
          createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            body: "Email and Password are required",
          })
        );
      }

      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return sendError(
          event,
          createError({
            statusCode: 401,
            statusMessage: "Unauthorized",
            body: error.message,
          })
        );
      }

      return {
        statusCode: 200,
        body: { user },
      };
    }
  } catch (error) {
    console.error(error);
    sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      })
    );
  }
});
