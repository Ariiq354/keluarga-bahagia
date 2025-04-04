export default defineEventHandler(async (event) => {
  protectFunction(event);

  const [err, pekerjaan] = await tryCatch(getAllPekerjaan());
  if (err) {
    console.error("GETPEKERJAAN_FAILED", err);
    throw createError("Internal Server Error");
  }

  const data = pekerjaan.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  return data;
});
