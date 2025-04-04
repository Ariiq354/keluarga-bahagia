import * as v from "valibot";

const bodySchema = v.object({
  id: v.optional(v.number()),
  name: v.string(),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  adminFunction(event);
  const { body } = event.context.validated;

  if (body.id) {
    const [err] = await tryCatch(updateJurusan(body.id, body));
    if (err) {
      console.error("UPDATEJURUSAN_FAILED", err);
      throw createError("Internal Server Error");
    }
  } else {
    const [err] = await tryCatch(createJurusan(body));
    if (err) {
      console.error("CREATEJURUSAN_FAILED", err);
      throw createError("Internal Server Error");
    }
  }

  return;
});
