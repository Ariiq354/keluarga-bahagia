export default defineEventHandler(async (event) => {
  protectFunction(event);

  const [err] = await tryCatch(invalidateSession(event.context.session!.id));
  if (err) {
    console.error("INVALIDATESESSION_FAILED", err);
    throw createError("Internal Server Error");
  }
  deleteSessionTokenCookie(event);

  return;
});
