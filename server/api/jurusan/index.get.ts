export default defineEventHandler(async (event) => {
  protectFunction(event);

  const res = await getAllJurusan();

  const data = res.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  return data;
});
