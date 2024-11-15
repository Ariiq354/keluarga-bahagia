export default defineEventHandler(async (event) => {
  adminFunction(event);

  const res = await getAllPekerjaan();

  const data = res.map((item) => {
    return item.name;
  });

  return data;
});
