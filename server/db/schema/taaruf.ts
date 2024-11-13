import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { timestamp } from "./common";
import {
  relations,
  type InferInsertModel,
  type InferSelectModel,
} from "drizzle-orm";
import { userTable } from "./auth";

export const taarufTable = sqliteTable("taaruf", {
  id: int().primaryKey({ autoIncrement: true }),
  pemohonId: int()
    .notNull()
    .references(() => userTable.id),
  tujuanId: int()
    .notNull()
    .references(() => userTable.id),
  statusPersetujuan: text({
    enum: ["Belum diproses", "Ditolak", "Disetujui"],
  })
    .notNull()
    .default("Belum diproses"),
  ...timestamp,
});

export const taarufRelations = relations(taarufTable, ({ one }) => ({
  userPemohon: one(userTable, {
    fields: [taarufTable.pemohonId],
    references: [userTable.id],
  }),
  userTujuan: one(userTable, {
    fields: [taarufTable.tujuanId],
    references: [userTable.id],
  }),
}));

export type Taaruf = InferSelectModel<typeof taarufTable>;
export type NewTaaruf = InferInsertModel<typeof taarufTable>;
