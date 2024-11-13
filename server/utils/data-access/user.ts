import { desc, eq, inArray } from "drizzle-orm";
import { db } from "~~/server/db";
import {
  type NewUser,
  type NewUserDtl,
  userDtlTable,
  userTable,
} from "~~/server/db/schema/auth";

export async function getAllUser() {
  return await db.query.userTable.findMany({
    orderBy: desc(userTable.createdAt),
    with: {
      detail: true,
    },
  });
}

export async function getUserByUsername(username: string) {
  return await db.query.userTable.findFirst({
    where: eq(userTable.username, username),
  });
}

export async function createUser(data: NewUser) {
  return await db.insert(userTable).values(data);
}

export async function updateUser(id: number, data: Partial<NewUser>) {
  return await db.update(userTable).set(data).where(eq(userTable.id, id));
}

export async function getUserDetailByUserId(id: number) {
  return await db.query.userDtlTable.findFirst({
    where: eq(userDtlTable.userId, id),
  });
}

export async function createUserDetail(data: NewUserDtl) {
  return await db.insert(userDtlTable).values(data);
}

export async function updateUserDetail(id: number, data: Partial<NewUserDtl>) {
  return await db.update(userDtlTable).set(data).where(eq(userDtlTable.id, id));
}

export async function deleteUser(id: number[]) {
  return await db.delete(userTable).where(inArray(userTable.id, id));
}
