import type { H3Event, H3EventContext } from "h3";
import * as v from "valibot";

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

export async function tryCatch<T, E = Error>(promise: Promise<T>) {
  try {
    const data = await promise;
    return [null, data] as const;
  } catch (error) {
    return [error as E, null] as const;
  }
}

export function defineValidatedEventHandler<
  B extends v.GenericSchema | undefined = undefined,
  Q extends v.GenericSchema | undefined = undefined,
  P extends v.GenericSchema | undefined = undefined,
  ValidatedEvent = H3Event & {
    context: H3EventContext & {
      validated: {
        body: B extends v.GenericSchema ? v.InferOutput<B> : undefined;
        query: Q extends v.GenericSchema ? v.InferOutput<Q> : undefined;
        params: P extends v.GenericSchema ? v.InferOutput<P> : undefined;
      };
    };
  },
>(
  validations: {
    bodySchema?: B;
    querySchema?: Q;
    paramsSchema?: P;
  },
  handler: (event: ValidatedEvent) => Promise<any>
) {
  return defineEventHandler(async (event) => {
    const errors = new Map<"body" | "query" | "params", unknown>();
    const validated = new Map<"body" | "query" | "params", unknown>();

    if (validations.bodySchema) {
      const body = await readBody(event);
      const bodyResult = v.safeParse(validations.bodySchema, body);

      if (!bodyResult.success) {
        errors.set("body", bodyResult.issues);
      } else {
        validated.set("body", bodyResult.output);
      }
    }

    if (validations.querySchema) {
      const query = getQuery(event);
      const queryResult = v.safeParse(validations.querySchema, query);

      if (!queryResult.success) {
        errors.set("query", queryResult.issues);
      } else {
        validated.set("query", queryResult.output);
      }
    }

    if (validations.paramsSchema) {
      const params = getRouterParams(event);
      const paramsResult = v.safeParse(validations.paramsSchema, params);

      if (!paramsResult.success) {
        errors.set("body", paramsResult.issues);
      } else {
        validated.set("params", paramsResult.output);
      }
    }

    if (errors.size > 0) {
      setResponseStatus(event, 422);
      return {
        success: false,
        data: null,
        errors: Object.fromEntries(errors.entries()),
      };
    }

    event.context.validated = Object.fromEntries(validated.entries());
    return handler(event as ValidatedEvent);
  });
}
