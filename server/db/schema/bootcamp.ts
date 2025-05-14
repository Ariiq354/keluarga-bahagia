import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { timestamp } from "./common";

export const bootcampTable = sqliteTable("bootcamp", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  price: int().notNull(),
  description: text().notNull(),
  place: text().notNull(),
  gmaps: text(),
  foto: text().notNull(),
  time: text().notNull(),
  quota: int().notNull(),
  speaker: text().notNull(),
  isActive: int().notNull().default(1),
  ...timestamp,
});

export type Bootcamp = InferSelectModel<typeof bootcampTable>;
export type NewBootcamp = InferInsertModel<typeof bootcampTable>;
