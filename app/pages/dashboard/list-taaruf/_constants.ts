import { z } from "zod";

export const columns = [
  {
    key: "namaLengkapPemohon",
    label: "Nama Lengkap Pemohon",
    sortable: true,
  },
  {
    key: "namaLengkapTujuan",
    label: "Nama Lengkap Tujuan",
    sortable: true,
  },
  {
    key: "tanggal",
    label: "Tanggal Permintaan",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
  },
];

export const statusOptions = ["Belum diproses", "Ditolak", "Disetujui"];

export const schema = z.object({
  id: z.number(),
  pemohonId: z.number(),
  tujuanId: z.number(),
  statusPersetujuan: z.string(),
});

export type Schema = z.output<typeof schema>;

export const getInitialFormData = (): Partial<Schema> => ({
  id: undefined,
  statusPersetujuan: undefined,
  pemohonId: undefined,
  tujuanId: undefined,
});
