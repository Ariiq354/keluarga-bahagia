export default defineEventHandler(async (event) => {
  protectFunction(event);

  const id_user = getRouterParam(event, "id_user");

  if (!id_user) {
    throw createError({
      statusCode: 422,
      statusMessage: "Validation Error",
    });
  }

  const [err, taaruf] = await tryCatch(getTaarufByPemohonId(Number(id_user)));
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
