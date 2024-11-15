import { z } from "zod";

const bodySchema = z.object({
  id: z.number().optional(),
  name: z.string(),
});

export default defineEventHandler(async (event) => {
  adminFunction(event);

  const formData = await readValidatedBody(event, (body) =>
    bodySchema.parse(body)
  );

  if (formData.id) {
    await updateSuku(formData.id, formData);
  } else {
    await createSuku(formData);
  }

  return;
});
