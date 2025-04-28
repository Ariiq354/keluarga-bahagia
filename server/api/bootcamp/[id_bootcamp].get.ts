import { getBootcampById } from "~~/server/utils/bootcamp";

export default defineEventHandler(async (event) => {
  protectFunction(event);

  const id_bootcamp = getRouterParam(event, "id_bootcamp");

  if (!id_bootcamp) {
    throw createError({
      statusCode: 422,
      statusMessage: "Validation Error",
    });
  }

  const [err, bootcamp] = await tryCatch(getBootcampById(Number(id_bootcamp)));
  if (err) {
    console.error("GETbootcamp_FAILED", err);
    throw createError("Internal Server Error");
  }

  const data = bootcamp

  return data;
});
