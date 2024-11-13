import { drizzle } from "drizzle-orm/libsql";
import * as auth from "./schema/auth";
import * as taaruf from "./schema/taaruf";

const config = useRuntimeConfig();

export const db = drizzle({
  connection: {
    url: config.databaseUrl as string,
    authToken: config.databaseAuthToken as string,
  },
  schema: {
    ...auth,
    ...taaruf,
  },
  casing: "snake_case",
});
