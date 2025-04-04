export default defineEventHandler(async (event) => {
  protectFunction(event);

  const [err, suku] = await tryCatch(getAllSuku());
  if (err) {
    console.error("GETSUKU_FAILED", err);
    throw createError("Internal Server Error");
  }

  const data = suku.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  return data;
});
