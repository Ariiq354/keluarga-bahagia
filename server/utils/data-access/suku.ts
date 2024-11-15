import { desc, eq, inArray } from "drizzle-orm";
import { db } from "~~/server/db";
import { type NewSuku, sukuTable } from "~~/server/db/schema/selectoption";

export async function getAllSuku() {
  return await db.query.sukuTable.findMany({
    orderBy: desc(sukuTable.createdAt),
  });
}

export async function createSuku(data: NewSuku) {
  return await db.insert(sukuTable).values(data);
}

export async function updateSuku(id: number, data: Partial<NewSuku>) {
  return await db.update(sukuTable).set(data).where(eq(sukuTable.id, id));
}

export async function deleteSuku(id: number[]) {
  return await db.delete(sukuTable).where(inArray(sukuTable.id, id));
}
