import { verify } from "@node-rs/argon2";
import { z } from "zod";

const bodySchema = z
  .object({
    username: z.string(),
    password: z.string().min(8),
    rememberMe: z.boolean(),
  })
  .strict();

export default eventHandler(async (event) => {
  const formData = await readBody(event);

  const parseRes = bodySchema.parse(formData);

  const existingUser = await getUserByUsername(parseRes.username);

  if (!existingUser) {
    return createError({
      message: "Username atau password salah",
      statusCode: 400,
    });
  }

  const validPassword = await verify(existingUser.password, parseRes.password);

  if (!validPassword) {
    return createError({
      message: "Username atau password salah",
      statusCode: 400,
    });
  }

  const session = await createSession(existingUser.id);
  if (parseRes.rememberMe) {
    await extendSession(session.id, 1000 * 60 * 60 * 24 * 7);
  }
  setSessionTokenCookie(event, session.id, session.expiresAt);

  return {
    authSession: session.id,
    user: existingUser.id,
  };
});
