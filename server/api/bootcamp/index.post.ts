import * as v from "valibot";
import { createBootcamp, updateBootcamp } from "~~/server/utils/bootcamp";

const bodySchema = v.object({
  id: v.optional(v.number()),
  title: v.string(),
  price: v.number(),
  description: v.string(),
  place: v.string(),
  quota: v.number(),
  gmaps: v.string(),
  foto: v.string(),
  time: v.string(),
  isActive: v.number(),
  speaker: v.string(),
});

export default defineValidatedEventHandler({ bodySchema }, async (event) => {
  adminFunction(event);
  const { body } = event.context.validated;

  if (body.id) {
    const [err] = await tryCatch(updateBootcamp(body.id, body));
    if (err) {
      console.error("UPDATEBOOTCAMPT", err);
      throw createError("Internal Server Error");
    }
  } else {
    const [err] = await tryCatch(createBootcamp(body));
    if (err) {
      console.error("CREATEBOOTCAMP", err);
      throw createError("Internal Server Error");
    }
  }

  return;
});
