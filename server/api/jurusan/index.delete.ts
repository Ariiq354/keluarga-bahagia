import * as v from "valibot";

const bodySchema = v.object({
  id: v.array(v.number()),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  adminFunction(event);

  const { body } = event.context.validated;

  const [err] = await tryCatch(deleteJurusan(body.id));
  if (err) {
    console.error("DELETEJURUSAN_FAILED", err);
    throw createError("Internal Server Error");
  }

  return;
});
