import * as v from "valibot";

const bodySchema = v.object({
  id: v.optional(v.number()),
  name: v.string(),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  adminFunction(event);
  const { body } = event.context.validated;

  if (body.id) {
    const [err] = await tryCatch(updateSuku(body.id, body));
    if (err) {
      console.error("UPDATESUKU_FAILED", err);
      throw createError("Internal Server Error");
    }
  } else {
    const [err] = await tryCatch(createSuku(body));
    if (err) {
      console.error("CREATESUKU_FAILED", err);
      throw createError("Internal Server Error");
    }
  }

  return;
});
