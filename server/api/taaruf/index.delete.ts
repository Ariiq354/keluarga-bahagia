import * as v from "valibot";

const bodySchema = v.array(
  v.object({
    id: v.number(),
    pemohonId: v.number(),
    tujuanId: v.number(),
  })
);

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  protectFunction(event);
  const { body } = event.context.validated;

  for (const item of body) {
    const [err] = await tryCatch(
      updateUser(item.pemohonId, {
        isAvailable: true,
      })
    );
    if (err) {
      console.error("UPDATEUSERPEMOHON_FAILED", err);
      throw createError("Internal Server Error");
    }

    const [err2] = await tryCatch(
      updateUser(item.tujuanId, {
        isAvailable: true,
      })
    );
    if (err2) {
      console.error("UPDATEUSERTUJUAN_FAILED", err2);
      throw createError("Internal Server Error");
    }

    const [err3] = await tryCatch(deleteTaaruf([item.id]));
    if (err3) {
      console.error("DELETETAARUF_FAILED", err3);
      throw createError("Internal Server Error");
    }
  }

  return;
});
