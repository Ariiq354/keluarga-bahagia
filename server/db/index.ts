import { drizzle } from "drizzle-orm/libsql";
import * as auth from "./schema/auth";
import * as taaruf from "./schema/taaruf";
import * as selectoption from "./schema/selectoption";
import * as bootcamp from "./schema/bootcamp";

const config = useRuntimeConfig();

export const db = drizzle({
  connection: {
    url: config.databaseUrl as string,
    authToken: config.databaseAuthToken as string,
  },
  schema: {
    ...auth,
    ...taaruf,
    ...bootcamp,
    ...selectoption,
  },
  casing: "snake_case",
});
