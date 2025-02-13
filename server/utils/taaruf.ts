import { desc, eq, inArray } from "drizzle-orm";
import { db } from "~~/server/db";
import { type NewTaaruf, taarufTable } from "~~/server/db/schema/taaruf";

export async function getAllTaaruf() {
  return await db.query.taarufTable.findMany({
    orderBy: desc(taarufTable.createdAt),
    with: {
      userPemohon: true,
      userTujuan: true,
    },
  });
}

export async function getTaarufByPemohonId(id: number) {
  return await db.query.taarufTable.findMany({
    orderBy: desc(taarufTable.createdAt),
    where: eq(taarufTable.pemohonId, id),
    with: {
      userPemohon: true,
      userTujuan: true,
    },
  });
}

export async function createTaaruf(data: NewTaaruf) {
  return await db.insert(taarufTable).values(data);
}

export async function updateTaaruf(id: number, data: Partial<NewTaaruf>) {
  return await db.update(taarufTable).set(data).where(eq(taarufTable.id, id));
}

export async function deleteTaaruf(id: number[]) {
  return await db.delete(taarufTable).where(inArray(taarufTable.id, id));
}
