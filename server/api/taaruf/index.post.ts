import * as v from "valibot";

const bodySchema = v.object({
  pemohonId: v.number(),
  tujuanId: v.number(),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  protectFunction(event);
  const { body } = event.context.validated;

  const [err] = await tryCatch(createTaaruf(body));
  if (err) {
    console.error("CREATETAARUF_FAILED", err);
    throw createError("Internal Server Error");
  }

  return;
});
