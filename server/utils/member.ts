import { and, eq, ne } from "drizzle-orm";
import { db } from "~~/server/db";
import { userTable } from "~~/server/db/schema/auth";

export async function getAllMember() {
  return db.query.userTable.findMany({
    where: and(
      ne(userTable.role, "admin"),
      eq(userTable.isActive, true),
      eq(userTable.isAvailable, true)
    ),
    with: {
      detail: true,
    },
  });
}
