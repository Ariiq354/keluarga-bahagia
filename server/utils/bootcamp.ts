import { db } from "~~/server/db";
import { and, desc, eq, inArray } from "drizzle-orm";
import { bootcampTable,type NewBootcamp } from "~~/server/db/schema/bootcamp";

export async function getAllBootcamp() {
  return await db.query.bootcampTable.findMany({
    orderBy: desc(bootcampTable.createdAt),
  });
}

export async function createBootcamp(data: NewBootcamp) {
  return await db.insert(bootcampTable).values(data);
}

export async function updateBootcamp(
  id: number,
  data: Partial<NewBootcamp>,

) {
  const conditions = [
    eq(bootcampTable.id, id),
  ];

  return await db
    .update(bootcampTable)
    .set(data)
    .where(and(...conditions));
}

export async function deleteBootcamp(id: number[]) {
  const conditions = [
    inArray(bootcampTable.id, id),
  ];

  return await db.delete(bootcampTable).where(and(...conditions));
}


