import { eq, sql } from "drizzle-orm";
import { db } from "~~/server/db";
import {
  type Session,
  sessionTable,
  type UserLucia,
  userTable,
  type NewSession,
  userDtlTable,
} from "~~/server/db/schema/auth";

interface userSession {
  user: UserLucia;
  session: Session;
}

export async function insertSessionData(data: NewSession) {
  return await db.insert(sessionTable).values(data);
}

export async function getUserSessionById(
  sessionId: string
): Promise<userSession[]> {
  return await db
    .select({
      user: {
        id: userTable.id,
        username: userTable.username,
        role: userTable.role,
        noTelepon: userTable.noTelepon,
        namaLengkap: userTable.namaLengkap,
        isActive: userTable.isActive,
        isAvailable: userTable.isAvailable,
        email: userTable.email,
        foto: userDtlTable.foto,
      },
      session: sessionTable,
    })
    .from(sessionTable)
    .innerJoin(userTable, eq(sessionTable.userId, userTable.id))
    .leftJoin(userDtlTable, eq(userTable.id, userDtlTable.userId))
    .where(eq(sessionTable.id, sessionId));
}

export async function deleteSessionData(sessionId: string) {
  return await db.delete(sessionTable).where(eq(sessionTable.id, sessionId));
}

export async function updateSessionData(
  sessionId: string,
  data: Partial<NewSession>
) {
  return await db
    .update(sessionTable)
    .set({
      expiresAt: data.expiresAt,
    })
    .where(eq(sessionTable.id, sessionId));
}

export async function extendSession(sessionId: string, time: number) {
  return await db
    .update(sessionTable)
    .set({
      expiresAt: sql`${sessionTable.expiresAt} + ${time}`,
    })
    .where(eq(sessionTable.id, sessionId));
}
