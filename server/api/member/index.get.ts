export default defineEventHandler(async (event) => {
  protectFunction(event);

  const res = await getAllMember();

  const filterRes = res.filter(
    (item) => item.gender !== event.context.user?.gender
  );

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
      },
    };
  });

  return data;
});
