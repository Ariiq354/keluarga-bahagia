export default defineEventHandler(async (event) => {
  adminFunction(event);

  const res = await getAllUser();

  const data = res.map((item) => {
    let detail;
    if (item.detail) {
      detail = {
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
      };
    }

    return {
      id: item.id,
      username: item.username,
      noTelepon: item.noTelepon,
      namaLengkap: item.namaLengkap,
      email: item.email,
      isActive: item.isActive,

      detail,
    };
  });

  return data;
});
