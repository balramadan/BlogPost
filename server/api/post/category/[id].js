import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const method = getMethod(event);
  const { id } = event.context.params;
  const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);

  try {
    if (method === "GET") {
      let { data: categoryData, error } = await supabase
        .from("post")
        .select("*")
        .eq("tag", capitalizedId);

      if (error) {
        throw createError({
          statusCode: 500,
          statusMessage: "Error",
        });
      }

      if (categoryData.length === 0) {
        throw createError({
          statusCode: 404,
          statusMessage: "Post Not Found",
        });
      }

      return send(event, JSON.stringify(categoryData));
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
