export default defineEventHandler(async (event) => {
  adminFunction(event);

  const res = await getAllUser();

  const data = res.map((item) => {
    return {
      id: item.id,
      username: item.username,
      noTelepon: item.noTelepon,
      namaLengkap: item.namaLengkap,
      gender: item.gender,
      isActive: item.isActive,
    };
  });

  return data;
});
