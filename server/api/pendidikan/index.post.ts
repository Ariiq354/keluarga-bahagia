import * as v from "valibot";

const bodySchema = v.object({
  id: v.optional(v.number()),
  name: v.string(),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  adminFunction(event);
  const { body } = event.context.validated;

  if (body.id) {
    const [err] = await tryCatch(updatePendidikan(body.id, body));
    if (err) {
      console.error("UPDATEPENDIDIKAN_FAILED", err);
      throw createError("Internal Server Error");
    }
  } else {
    const [err] = await tryCatch(createPendidikan(body));
    if (err) {
      console.error("CREATEPENDIDIKAN_FAILED", err);
      throw createError("Internal Server Error");
    }
  }

  return;
});
