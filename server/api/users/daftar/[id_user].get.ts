export default defineEventHandler(async (event) => {
  protectFunction(event);

  const id_user = getRouterParam(event, "id_user");

  const [err, user] = await tryCatch(getUserDetailByUserId(Number(id_user)));
  if (err) {
    console.error("GETUSER_FAILED", err);
    throw createError("Internal Server Error");
  }

  if (user) {
    return {
      provinsi: user.provinsi,
      kota: user.kota,
      kecamatan: user.kecamatan,
      kelurahan: user.kelurahan,
      berat: user.berat,
      deskripsi: user.deskripsi,
      hobi: user.hobi,
      kriteria: user.kriteria,
      namaAyah: user.namaAyah,
      pekerjaan: user.pekerjaan,
      pendidikan: user.pendidikan,
      jurusan: user.jurusan,
      statusKawin: user.statusKawin,
      suku: user.suku,
      tanggalLahir: user.tanggalLahir,
      tinggi: user.tinggi,
      kodeUser: user.kodeUser,
      gender: user.gender,
      anakKe: user.anakKe,
      dariBersaudara: user.dariBersaudara,
      foto: user.foto,
      instagram: user.instagram,
    };
  }

  return;
});
