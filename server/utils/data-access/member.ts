import { and, eq, not } from "drizzle-orm";
import { db } from "~~/server/db";
import { userTable } from "~~/server/db/schema/auth";

export async function getAllMember() {
  return db.query.userTable.findMany({
    where: and(not(eq(userTable.role, "admin")), eq(userTable.isActive, true)),
    with: {
      detail: true,
    },
  });
}
