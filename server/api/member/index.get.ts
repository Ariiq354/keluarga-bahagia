export default defineEventHandler(async (event) => {
  protectFunction(event);

  const res = await getAllMember();
  const user = await getUserByUsername(event.context.user!.username);

  const filterRes = user?.detail
    ? res.filter((item) => item.detail.gender !== user.detail.gender)
    : res;

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
