import { desc, eq, inArray } from "drizzle-orm";
import { db } from "~~/server/db";
import {
  type NewPendidikan,
  pendidikanTable,
} from "~~/server/db/schema/selectoption";

export async function getAllPendidikan() {
  return await db.query.pendidikanTable.findMany({
    orderBy: desc(pendidikanTable.createdAt),
  });
}

export async function createPendidikan(data: NewPendidikan) {
  return await db.insert(pendidikanTable).values(data);
}

export async function updatePendidikan(
  id: number,
  data: Partial<NewPendidikan>
) {
  return await db
    .update(pendidikanTable)
    .set(data)
    .where(eq(pendidikanTable.id, id));
}

export async function deletePendidikan(id: number[]) {
  return await db
    .delete(pendidikanTable)
    .where(inArray(pendidikanTable.id, id));
}
