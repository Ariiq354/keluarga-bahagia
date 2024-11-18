import { z } from "zod";

const bodySchema = z.object({
  statusKawin: z.string(),
  tanggalLahir: z.string(),
  provinsi: z.string(),
  kota: z.string(),
  kecamatan: z.string(),
  kelurahan: z.string(),
  namaAyah: z.string(),
  suku: z.string(),
  pendidikan: z.string(),
  pekerjaan: z.string(),
  tinggi: z.number(),
  jurusan: z.string(),
  berat: z.number(),
  hobi: z.string(),
  kriteria: z.string(),
  deskripsi: z.string(),
  anakKe: z.number(),
  dariBersaudara: z.number(),
  instagram: z.string(),
  foto: z.string(),
});

export default defineEventHandler(async (event) => {
  protectFunction(event);

  const parseRes = await readValidatedBody(event, (body) =>
    bodySchema.parse(body)
  );

  const itemData = {
    ...parseRes,
    userId: event.context.user!.id,
  };

  await createUserDetail(itemData);

  await updateUser(event.context.user!.id, {
    isActive: true,
  });

  return;
});
