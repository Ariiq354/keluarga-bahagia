export default defineEventHandler(async (event) => {
  protectFunction(event);

  const id_user = getRouterParam(event, "id_user");

  const res = await getUserDetailByUserId(Number(id_user));

  if (res) {
    return {
      alamat: res.alamat,
      berat: res.berat,
      deskripsi: res.deskripsi,
      hobi: res.hobi,
      kriteria: res.kriteria,
      namaAyah: res.namaAyah,
      pekerjaan: res.pekerjaan,
      pendidikan: res.pendidikan,
      statusKawin: res.statusKawin,
      suku: res.suku,
      tanggalLahir: res.tanggalLahir,
      tinggi: res.tinggi,
    };
  }

  return;
});
