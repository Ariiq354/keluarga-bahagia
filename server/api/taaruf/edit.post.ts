import * as v from "valibot";

const bodySchema = v.object({
  id: v.number(),
  pemohonId: v.number(),
  tujuanId: v.number(),
  statusPersetujuan: v.picklist(["Belum diproses", "Ditolak", "Disetujui"]),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  adminFunction(event);
  const { body } = event.context.validated;

  if (body.statusPersetujuan === "Disetujui") {
    const [err] = await tryCatch(
      updateUser(body.pemohonId, {
        isAvailable: false,
      })
    );
    if (err) {
      console.error("UPDATEUSERPEMOHON_FAILED", err);
      throw createError("Internal Server Error");
    }

    const [err2] = await tryCatch(
      updateUser(body.tujuanId, {
        isAvailable: false,
      })
    );
    if (err2) {
      console.error("UPDATEUSERTUJUAN_FAILED", err2);
      throw createError("Internal Server Error");
    }
  } else {
    const [err] = await tryCatch(
      updateUser(body.pemohonId, {
        isAvailable: true,
      })
    );
    if (err) {
      console.error("UPDATEUSERPEMOHON_FAILED", err);
      throw createError("Internal Server Error");
    }

    const [err2] = await tryCatch(
      updateUser(body.tujuanId, {
        isAvailable: true,
      })
    );
    if (err2) {
      console.error("UPDATEUSERTUJUAN_FAILED", err2);
      throw createError("Internal Server Error");
    }
  }

  const [err] = await tryCatch(
    updateTaaruf(body.id, {
      statusPersetujuan: body.statusPersetujuan,
    })
  );
  if (err) {
    console.error("UPDATETAARUF_FAILED", err);
    throw createError("Internal Server Error");
  }

  return;
});
