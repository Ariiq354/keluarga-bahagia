import { verify } from "@node-rs/argon2";
import * as v from "valibot";

const bodySchema = v.object({
  username: v.string(),
  password: v.pipe(v.string(), v.minLength(8)),
  rememberMe: v.boolean(),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  const { body } = event.context.validated;

  const [err1, user] = await tryCatch(getUserByUsername(body.username));
  if (err1) {
    console.error("GETUSER_FAILED", err1);
    throw createError("Internal Server Error");
  }

  if (!user) {
    return createError({
      message: "Username atau password salah",
      statusCode: 400,
    });
  }

  const [err2, validPass] = await tryCatch(
    verify(user.password, body.password)
  );
  if (err2) {
    console.error("PASSWORDVERIFY_FAILED", err2);
    throw createError("Internal Server Error");
  }

  if (!validPass) {
    return createError({
      message: "Username atau password salah",
      statusCode: 400,
    });
  }

  const [err3, session] = await tryCatch(createSession(user.id));
  if (err3) {
    console.error("CREATESESSION_FAILED", err3);
    throw createError("Internal Server Error");
  }

  if (body.rememberMe) {
    const [err4] = await tryCatch(
      extendSession(session.id, 1000 * 60 * 60 * 24 * 7)
    );
    if (err4) {
      console.error("EXTENDSESSION_FAILED", err4);
      throw createError("Internal Server Error");
    }
  }

  setSessionTokenCookie(event, session.id, session.expiresAt);

  return;
});
