export default defineEventHandler(async (event) => {
  protectFunction(event);

  const id_user = getRouterParam(event, "id_user");

  const res = await getUserDetailByUserId(Number(id_user));

  if (res) {
    return {
      provinsi: res.provinsi,
      kota: res.kota,
      kecamatan: res.kecamatan,
      kelurahan: res.kelurahan,
      berat: res.berat,
      deskripsi: res.deskripsi,
      hobi: res.hobi,
      kriteria: res.kriteria,
      namaAyah: res.namaAyah,
      pekerjaan: res.pekerjaan,
      pendidikan: res.pendidikan,
      jurusan: res.jurusan,
      statusKawin: res.statusKawin,
      suku: res.suku,
      tanggalLahir: res.tanggalLahir,
      tinggi: res.tinggi,
    };
  }

  return;
});
