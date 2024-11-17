import { z } from "zod";

const bodySchema = z
  .object({
    id: z.number(),
    pemohonId: z.number(),
    tujuanId: z.number(),
  })
  .array();

export default defineEventHandler(async (event) => {
  protectFunction(event);

  const formData = await readValidatedBody(event, (body) =>
    bodySchema.parse(body)
  );

  for (const item of formData) {
    await updateUser(item.pemohonId, {
      isAvailable: true,
    });
    await updateUser(item.tujuanId, {
      isAvailable: true,
    });
    await deleteTaaruf([item.id]);
  }

  return;
});
