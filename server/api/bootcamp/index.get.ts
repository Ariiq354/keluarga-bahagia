export default defineEventHandler(async (event) => {
  adminFunction(event);

  const [err, bootcamp] = await tryCatch(getAllBootcamp());
  if (err) {
    console.error("GETBOOTCAMP_FAILED", err);
    throw createError("Internal Server Error");
  }

  const data = bootcamp.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      foto: item.foto,
      place: item.place,
      time: item.time,
      speaker: item.speaker,
      tanggal: item.createdAt.slice(0, 10),
    };
  });

  return data;
});
