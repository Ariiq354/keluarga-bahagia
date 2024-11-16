import { z } from "zod";

export const schema = z.object({
  statusKawin: z.string(),
  tanggalLahir: z.string(),
  provinsi: z.string(),
  kelurahan: z.string(),
  kota: z.string(),
  kecamatan: z.string(),
  namaAyah: z.string(),
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

export const getInitialFormData = (): Partial<Schema> => ({
  statusKawin: undefined,
  tanggalLahir: undefined,
  kota: undefined,
  kecamatan: undefined,
  kelurahan: undefined,
  provinsi: undefined,
  namaAyah: undefined,
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
});
