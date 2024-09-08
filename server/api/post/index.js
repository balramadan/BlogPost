import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const method = getMethod(event);

  try {
    if (method === "GET") {
      let { data: post, error } = await supabase.from("post").select("*");
      if (error) {
        throw createError({
          statusCode: 500,
          statusMessage: "Internal Server Error",
        });
      }

      const message = post;
      return send(event, JSON.stringify(message));
    } else if (method === "POST") {
      setResponseStatus(event, 201);
      return { message: "POST Method" };
    } else {
      throw createError({
        statusCode: 405,
        statusMessage: "Method Not Allowed",
      });
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
