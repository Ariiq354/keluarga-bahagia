import { hash } from "@node-rs/argon2";
import * as v from "valibot";

const bodySchema = v.object({
  username: v.string(),
  password: v.pipe(v.string(), v.minLength(8)),
  noTelepon: v.string(),
  email: v.string(),
  namaLengkap: v.string(),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  const { body } = event.context.validated;

  const [err1, user] = await tryCatch(getUserByUsername(body.username));
  if (err1) {
    console.error("GETUSER_FAILED", err1);
    throw createError("Internal Server Error");
  }

  if (user) {
    throw createError({
      statusCode: 400,
      message: "Username sudah ada",
    });
  }

  const [err2, newPassword] = await tryCatch(hash(body.password));
  if (err2) {
    console.error("HASH_FAILED", err2);
    throw createError("Internal Server Error");
  }

  const itemData = {
    ...body,
    password: newPassword,
  };

  const [err3] = await tryCatch(createUser(itemData));
  if (err3) {
    console.error("CREATEUSER_FAILED", err3);
    throw createError("Internal Server Error");
  }

  return;
});
