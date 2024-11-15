import { z } from "zod";

const bodySchema = z.object({
  id: z.number(),
  pemohonId: z.number(),
  tujuanId: z.number(),
  statusPersetujuan: z.enum(["Belum diproses", "Ditolak", "Disetujui"]),
});

export default defineEventHandler(async (event) => {
  adminFunction(event);

  const formData = await readValidatedBody(event, (body) =>
    bodySchema.parse(body)
  );

  if (formData.statusPersetujuan === "Disetujui") {
    await updateUser(formData.pemohonId, {
      isAvailable: false,
    });
    await updateUser(formData.tujuanId, {
      isAvailable: false,
    });
  } else {
    await updateUser(formData.pemohonId, {
      isAvailable: true,
    });
    await updateUser(formData.tujuanId, {
      isAvailable: true,
    });
  }

  await updateTaaruf(formData.id, {
    statusPersetujuan: formData.statusPersetujuan,
  });

  return;
});
