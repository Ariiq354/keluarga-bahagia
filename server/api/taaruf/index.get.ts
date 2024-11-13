export default defineEventHandler(async (event) => {
  adminFunction(event);

  const res = await getAllTaaruf();

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
