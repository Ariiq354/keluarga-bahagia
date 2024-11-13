export default defineEventHandler(async (event) => {
  protectFunction(event);

  const id_user = getRouterParam(event, "id_user");

  const res = await getTaarufByPemohonId(Number(id_user));

  const data = res.map((item) => {
    return {
      id: item.id,
      pemohonId: item.pemohonId,
      tujuanId: item.tujuanId,
      namaLengkapPemohon: item.userPemohon.namaLengkap,
      namaLengkapTujuan: item.userTujuan.namaLengkap,
      tanggal: item.createdAt.slice(0, 10),
    };
  });

  return data;
});
