import { z } from "zod";

const bodySchema = z.object({
  id: z.array(z.number()),
});

export default defineEventHandler(async (event) => {
  adminFunction(event);

  const formData = await readValidatedBody(event, (body) =>
    bodySchema.parse(body)
  );

  await deleteUser(formData.id);

  return;
});
