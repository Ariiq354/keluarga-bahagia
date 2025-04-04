import * as v from "valibot";

const bodySchema = v.object({
  statusKawin: v.string(),
  tanggalLahir: v.string(),
  provinsi: v.string(),
  kota: v.string(),
  kecamatan: v.string(),
  kelurahan: v.string(),
  namaAyah: v.string(),
  suku: v.string(),
  pendidikan: v.string(),
  pekerjaan: v.string(),
  tinggi: v.number(),
  jurusan: v.string(),
  berat: v.number(),
  hobi: v.string(),
  kriteria: v.string(),
  deskripsi: v.string(),
  anakKe: v.number(),
  dariBersaudara: v.number(),
  instagram: v.string(),
  foto: v.string(),
  gender: v.picklist(["laki", "perempuan"]),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  protectFunction(event);
  const { body } = event.context.validated;

  const [err1, kode] = await tryCatch(getRandomUserCode());
  if (err1) {
    console.error("GETKODE_FAILED", err1);
    throw createError("Internal Server Error");
  }

  const itemData = {
    ...body,
    userId: event.context.user!.id,
    kodeUser: kode,
  };

  const [err2] = await tryCatch(createUserDetail(itemData));
  if (err2) {
    console.error("CREATEUSERDETAIL_FAILED", err2);
    throw createError("Internal Server Error");
  }

  const [err3] = await tryCatch(
    updateUser(event.context.user!.id, {
      isActive: true,
    })
  );
  if (err3) {
    console.error("UPDATEUSER_FAILED", err3);
    throw createError("Internal Server Error");
  }

  return;
});
