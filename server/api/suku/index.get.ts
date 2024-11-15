export default defineEventHandler(async (event) => {
  adminFunction(event);

  const res = await getAllSuku();

  const data = res.map((item) => {
    return item.name;
  });

  return data;
});
