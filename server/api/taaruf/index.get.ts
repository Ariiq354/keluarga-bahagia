export default defineEventHandler(async (event) => {
  adminFunction(event);

  const [err, taaruf] = await tryCatch(getAllTaaruf());
  if (err) {
    console.error("GETTAARUF_FAILED", err);
    throw createError("Internal Server Error");
  }

  const data = taaruf.map((item) => {
    return {
      id: item.id,
      pemohonId: item.pemohonId,
      tujuanId: item.tujuanId,
      status: item.statusPersetujuan,
      namaLengkapPemohon: item.userPemohon.namaLengkap,
      namaLengkapTujuan: item.userTujuan.namaLengkap,
      tanggal: item.createdAt.slice(0, 10),
    };
  });

  return data;
});
