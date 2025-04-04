import * as v from "valibot";

export const columns = [
  {
    accessorKey: "namaLengkapPemohon",
    header: "Nama Lengkap Pemohon",
  },
  {
    accessorKey: "namaLengkapTujuan",
    header: "Nama Lengkap Tujuan",
  },
  {
    accessorKey: "tanggal",
    header: "Tanggal Permintaan",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

export const statusOptions = ["Belum diproses", "Ditolak", "Disetujui"];

export const schema = v.object({
  id: v.pipe(v.number(), v.minValue(1, "Required")),
  pemohonId: v.pipe(v.number(), v.minValue(1, "Required")),
  tujuanId: v.pipe(v.number(), v.minValue(1, "Required")),
  statusPersetujuan: v.pipe(v.string(), v.minLength(1, "Required")),
});

export type Schema = v.InferOutput<typeof schema>;

export const getInitialFormData = (): Schema => ({
  id: 0,
  statusPersetujuan: "",
  pemohonId: 0,
  tujuanId: 0,
});
