import type { H3Event } from "h3";

export function protectFunction(event: H3Event) {
  if (!event.context.session) {
    throw createError({
      statusCode: 401,
    });
  }
}

export function adminFunction(event: H3Event) {
  protectFunction(event);

  if (event.context.user?.role !== "admin") {
    throw createError({
      statusCode: 403,
    });
  }
}
