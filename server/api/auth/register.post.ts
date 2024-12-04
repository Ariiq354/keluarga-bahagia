import { hash } from "@node-rs/argon2";
import { z } from "zod";

const bodySchema = z
  .object({
    username: z.string(),
    password: z.string().min(8),
    noTelepon: z.string(),
    gender: z.enum(["laki", "perempuan"]),
    email: z.string(),
    namaLengkap: z.string(),
  })
  .strict();

export default defineEventHandler(async (event) => {
  const formData = await readBody(event);

  const parseRes = bodySchema.parse(formData);
  const exist = await getUserByUsername(parseRes.username);
  if (exist) {
    throw createError({
      statusCode: 400,
      message: "Username sudah ada",
    });
  }
  const itemData = {
    ...parseRes,
    password: await hash(parseRes.password),
  };

  await createUser(itemData);

  return;
});
