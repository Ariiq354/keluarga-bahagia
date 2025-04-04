export default defineEventHandler(async (event) => {
  protectFunction(event);

  const [err, member] = await tryCatch(getAllMember());
  if (err) {
    console.error("GETMEMBER_FAILED", err);
    throw createError("Internal Server Error");
  }

  const [err1, user] = await tryCatch(
    getUserByUsername(event.context.user!.username)
  );
  if (err1) {
    console.error("GETUSER_FAILED", err1);
    throw createError("Internal Server Error");
  }

  const filterRes = user?.detail
    ? member.filter((item) => item.detail.gender !== user.detail.gender)
    : member;

  const data = filterRes.map((item) => {
    return {
      id: item.id,
      username: item.username,
      noTelepon: item.noTelepon,
      namaLengkap: item.namaLengkap,

      detail: {
        provinsi: item.detail.provinsi,
        kota: item.detail.kota,
        kecamatan: item.detail.kecamatan,
        kelurahan: item.detail.kelurahan,
        berat: item.detail.berat,
        deskripsi: item.detail.deskripsi,
        hobi: item.detail.hobi,
        kriteria: item.detail.kriteria,
        namaAyah: item.detail.namaAyah,
        pekerjaan: item.detail.pekerjaan,
        pendidikan: item.detail.pendidikan,
        jurusan: item.detail.jurusan,
        statusKawin: item.detail.statusKawin,
        suku: item.detail.suku,
        tanggalLahir: item.detail.tanggalLahir,
        tinggi: item.detail.tinggi,
        foto: item.detail.foto,
        kodeUser: item.detail.kodeUser,
      },
    };
  });

  return data;
});
