import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { timestamp } from "./common";

export const sukuTable = sqliteTable("suku", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  ...timestamp,
});

export const pekerjaanTable = sqliteTable("pekerjaan", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  ...timestamp,
});

export const jurusanTable = sqliteTable("jurusan", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  ...timestamp,
});

export const pendidikanTable = sqliteTable("pendidikan", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  ...timestamp,
});

export type Suku = InferSelectModel<typeof sukuTable>;
export type NewSuku = InferInsertModel<typeof sukuTable>;

export type Pekerjaan = InferSelectModel<typeof pekerjaanTable>;
export type NewPekerjaan = InferInsertModel<typeof pekerjaanTable>;

export type Jurusan = InferSelectModel<typeof jurusanTable>;
export type NewJurusan = InferInsertModel<typeof jurusanTable>;

export type Pendidikan = InferSelectModel<typeof pendidikanTable>;
export type NewPendidikan = InferInsertModel<typeof pendidikanTable>;
