import { desc, eq, inArray } from "drizzle-orm";
import { db } from "~~/server/db";
import {
  type NewPekerjaan,
  pekerjaanTable,
} from "~~/server/db/schema/selectoption";

export async function getAllPekerjaan() {
  return await db.query.pekerjaanTable.findMany({
    orderBy: desc(pekerjaanTable.createdAt),
  });
}

export async function createPekerjaan(data: NewPekerjaan) {
  return await db.insert(pekerjaanTable).values(data);
}

export async function updatePekerjaan(id: number, data: Partial<NewPekerjaan>) {
  return await db
    .update(pekerjaanTable)
    .set(data)
    .where(eq(pekerjaanTable.id, id));
}

export async function deletePekerjaan(id: number[]) {
  return await db.delete(pekerjaanTable).where(inArray(pekerjaanTable.id, id));
}
