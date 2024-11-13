import { z } from "zod";

export const schema = z.object({
  statusKawin: z.string(),
  tanggalLahir: z.string(),
  alamat: z.string(),
  namaAyah: z.string(),
  suku: z.string(),
  pendidikan: z.string(),
  pekerjaan: z.string(),
  tinggi: z.number(),
  berat: z.number(),
  hobi: z.string(),
  kriteria: z.string(),
  deskripsi: z.string(),
});

export const statusKawinOptions = ["Belum Pernah Menikah", "Janda / Duda"];

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
  alamat: undefined,
  namaAyah: undefined,
  suku: undefined,
  pendidikan: undefined,
  pekerjaan: undefined,
  tinggi: undefined,
  berat: undefined,
  hobi: undefined,
  kriteria: undefined,
  deskripsi: undefined,
});
