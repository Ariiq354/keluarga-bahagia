import { z } from "zod";

const bodySchema = z.object({
  pemohonId: z.number(),
  tujuanId: z.number(),
});

export default defineEventHandler(async (event) => {
  protectFunction(event);

  const formData = await readValidatedBody(event, (body) =>
    bodySchema.parse(body)
  );

  await createTaaruf(formData);

  return;
});
