import { hash } from "@node-rs/argon2";
import * as v from "valibot";

const bodySchema = v.object({
  password: v.pipe(v.string(), v.minLength(8)),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  protectFunction(event);
  const { body } = event.context.validated;

  const [err1, newPassword] = await tryCatch(hash(body.password));
  if (err1) {
    console.error("HASH_FAILED", err1);
    throw createError("Internal Server Error");
  }

  const [err2] = await tryCatch(
    updateUser(event.context.user!.id, {
      password: newPassword,
    })
  );
  if (err2) {
    console.error("HASH_FAILED", err2);
    throw createError("Internal Server Error");
  }

  return;
});
