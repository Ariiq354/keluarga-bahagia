import { desc, eq, inArray } from "drizzle-orm";
import { db } from "~~/server/db";
import {
  type NewJurusan,
  jurusanTable,
} from "~~/server/db/schema/selectoption";

export async function getAllJurusan() {
  return await db.query.jurusanTable.findMany({
    orderBy: desc(jurusanTable.createdAt),
  });
}

export async function createJurusan(data: NewJurusan) {
  return await db.insert(jurusanTable).values(data);
}

export async function updateJurusan(id: number, data: Partial<NewJurusan>) {
  return await db.update(jurusanTable).set(data).where(eq(jurusanTable.id, id));
}

export async function deleteJurusan(id: number[]) {
  return await db.delete(jurusanTable).where(inArray(jurusanTable.id, id));
}
