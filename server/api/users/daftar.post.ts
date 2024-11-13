import { z } from "zod";

const bodySchema = z.object({
  statusKawin: z.string(),
  tanggalLahir: z.string(),
  alamat: z.string(),
  namaAyah: z.string(),
  suku: z.string(),
  pendidikan: z.string(),
  pekerjaan: z.string(),
  tinggi: z.number(),
  berat: z.number(),
  hobi: z.string(),
  kriteria: z.string(),
  deskripsi: z.string(),
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

  return;
});
