import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { timestamp } from "./common";
import {
  relations,
  type InferInsertModel,
  type InferSelectModel,
} from "drizzle-orm";
import { bootcampTable } from "./bootcamp";

export const ticketTable = sqliteTable("ticket", {
  id: int().primaryKey({ autoIncrement: true }),
  bootcampId: int()
    .notNull()
    .references(() => bootcampTable.id),
  paymentStatus: text({
    enum: ["Belum diproses", "Ditolak", "Disetujui"],
  })
    .notNull()
    .default("Belum diproses"),
  quantity: int().notNull(),
  price: int().notNull(), // Harga satuan
  totalPrice: int().notNull(),
  midtransOrderId: text(),
  midtransTransactionId: text(),
  midtransStatus: text(),
  midtransVaNumber: text(),
  requestedAt: text().notNull(),
  paidAt: text(),
  expiredAt: text(),
  ...timestamp,
});

export const ticketRelations = relations(ticketTable, ({ one }) => ({
  bootcamp: one(bootcampTable, {
    fields: [ticketTable.bootcampId],
    references: [bootcampTable.id],
  }),
}));

export type Ticket = InferSelectModel<typeof ticketTable>;
export type NewTicket = InferInsertModel<typeof ticketTable>;
