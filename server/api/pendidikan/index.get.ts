export default defineEventHandler(async (event) => {
  protectFunction(event);

  const [err, pendidikan] = await tryCatch(getAllPendidikan());
  if (err) {
    console.error("GETPENDIDIKAN_FAILED", err);
    throw createError("Internal Server Error");
  }

  const data = pendidikan.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  return data;
});
