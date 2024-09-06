import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const method = getMethod(event);
  const { id } = event.context.params;

  try {
    if (method === "GET") {
      let { data: post, error } = await supabase
        .from("post")
        .select("*")
        .eq("permalink", id);

      if (error) {
        throw createError({
          statusCode: 500,
          statusMessage: "Internal Server Error",
        });
      }

      if (post.length === 0) {
        throw createError({
          statusCode: 404,
          statusMessage: "Post Not Found",
        });
      }

      const message = post;
      return send(event, JSON.stringify(message));
    } else if (method === "PUT") {
      console.log("PUT Method");
    }
  } catch (error) {
    sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      })
    );
  }
});
