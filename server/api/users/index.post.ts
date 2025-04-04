import { hash } from "@node-rs/argon2";
import * as v from "valibot";

const bodySchema = v.object({
  id: v.optional(v.number()),
  username: v.string(),
  password: v.string(),
  noTelepon: v.string(),
  namaLengkap: v.string(),
  email: v.string(),
  isActive: v.boolean(),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  adminFunction(event);
  const { body } = event.context.validated;

  const [err, user] = await tryCatch(getUserByUsername(body.username));
  if (err) {
    console.error("GETUSER_FAILED", err);
    throw createError("Internal Server Error");
  }

  if (body.id) {
    if (user && user.id !== body.id) {
      throw createError({
        statusCode: 400,
        message: "Username sudah ada",
      });
    }

    const itemData = {
      id: body.id,
      username: body.username,
      isActive: body.isActive,
    };

    const [err] = await tryCatch(updateUser(body.id, itemData));
    if (err) {
      console.error("UPDATEUSER_FAILED", err);
      throw createError("Internal Server Error");
    }
  } else {
    if (user) {
      throw createError({
        statusCode: 400,
        message: "Username sudah ada",
      });
    }

    const [err1, newPassword] = await tryCatch(hash(body.password));
    if (err1) {
      console.error("HASH_FAILED", err1);
      throw createError("Internal Server Error");
    }

    const newData = {
      ...body,
      password: newPassword,
    };

    const [err2] = await tryCatch(createUser(newData));
    if (err2) {
      console.error("CREATEUSER_FAILED", err2);
      throw createError("Internal Server Error");
    }
  }

  return;
});
