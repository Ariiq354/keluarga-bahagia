import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { timestamp } from "./common";
import {
  relations,
  type InferInsertModel,
  type InferSelectModel,
} from "drizzle-orm";

export const userTable = sqliteTable("user", {
  id: int().primaryKey({ autoIncrement: true }),
  username: text().notNull().unique(),
  namaLengkap: text().notNull(),
  noTelepon: text().notNull(),
  password: text().notNull(),
  email: text().notNull(),
  isActive: int({ mode: "boolean" }).notNull().default(false),
  isAvailable: int({ mode: "boolean" }).notNull().default(true),
  role: text({ enum: ["admin", "user"] })
    .notNull()
    .default("user"),
  ...timestamp,
});

export const userDtlTable = sqliteTable("user_dtl", {
  id: int().primaryKey({ autoIncrement: true }),
  userId: int()
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  statusKawin: text().notNull(),
  tanggalLahir: text().notNull(),
  kelurahan: text().notNull(),
  gender: text({ enum: ["laki", "perempuan"] }).notNull(),
  kecamatan: text().notNull(),
  kota: text().notNull(),
  provinsi: text().notNull(),
  namaAyah: text().notNull(),
  anakKe: int().notNull(),
  dariBersaudara: int().notNull(),
  suku: text().notNull(),
  pendidikan: text().notNull(),
  pekerjaan: text().notNull(),
  jurusan: text().notNull(),
  tinggi: int().notNull(),
  berat: int().notNull(),
  hobi: text().notNull(),
  instagram: text().notNull(),
  kriteria: text().notNull(),
  deskripsi: text().notNull().default(""),
  foto: text().notNull(),
  ...timestamp,
});

export const sessionTable = sqliteTable("session", {
  id: text().primaryKey(),
  userId: int()
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  expiresAt: int({ mode: "timestamp" }).notNull(),
});

export const userRelations = relations(userTable, ({ one }) => ({
  detail: one(userDtlTable, {
    fields: [userTable.id],
    references: [userDtlTable.userId],
  }),
}));

export type User = InferSelectModel<typeof userTable>;
export type NewUser = InferInsertModel<typeof userTable>;

export type UserDtl = InferSelectModel<typeof userDtlTable>;
export type NewUserDtl = InferInsertModel<typeof userDtlTable>;

export type UserLucia = Omit<User, "createdAt" | "updatedAt" | "password">;

export type Session = InferSelectModel<typeof sessionTable>;
export type NewSession = InferInsertModel<typeof sessionTable>;
