import { z } from "zod";

export const schema = z.object({
  statusKawin: z.string(),
  tanggalLahir: z.string(),
  provinsi: z.string(),
  kelurahan: z.string(),
  kota: z.string(),
  kecamatan: z.string(),
  namaAyah: z.string(),
  anakKe: z.number(),
  dariBersaudara: z.number(),
  suku: z.string(),
  pendidikan: z.string(),
  pekerjaan: z.string(),
  jurusan: z.string(),
  tinggi: z.number(),
  berat: z.number(),
  hobi: z.string(),
  kriteria: z.string(),
  deskripsi: z.string(),
  foto: z.string(),
  instagram: z.string(),
  gender: z.enum(["laki", "perempuan"]),
});

export const resetSchema = z.object({
  password: z.string().min(8),
});

export const statusKawinOptions = [
  "Belum Pernah Menikah",
  "Janda / Duda",
  "Sudah Menikah",
];

export const genderOptions = [
  {
    name: "Laki - laki",
    value: "laki",
  },
  {
    name: "Perempuan",
    value: "perempuan",
  },
];

export type Schema = z.output<typeof schema>;
export type ResetSchema = z.output<typeof resetSchema>;

export const getInitialFormData = (): Partial<Schema> => ({
  statusKawin: undefined,
  tanggalLahir: undefined,
  kota: undefined,
  kecamatan: undefined,
  kelurahan: undefined,
  provinsi: undefined,
  namaAyah: undefined,
  anakKe: undefined,
  dariBersaudara: undefined,
  jurusan: undefined,
  suku: undefined,
  pendidikan: undefined,
  pekerjaan: undefined,
  tinggi: undefined,
  berat: undefined,
  hobi: undefined,
  kriteria: undefined,
  deskripsi: undefined,
  foto: undefined,
  instagram: undefined,
  gender: undefined,
});

export const getInitialResetData = (): Partial<ResetSchema> => ({
  password: undefined,
});
