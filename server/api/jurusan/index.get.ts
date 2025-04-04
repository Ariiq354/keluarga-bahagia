export default defineEventHandler(async (event) => {
  protectFunction(event);

  const [err, jurusan] = await tryCatch(getAllJurusan());
  if (err) {
    console.error("GETJURUSAN_FAILED", err);
    throw createError("Internal Server Error");
  }

  const data = jurusan.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  return data;
});
