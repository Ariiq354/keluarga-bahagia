import * as v from "valibot";

export const schema = v.object({
  statusKawin: v.pipe(v.string(), v.minLength(1, "Required")),
  tanggalLahir: v.pipe(v.string(), v.minLength(1, "Required")),
  provinsi: v.pipe(v.string(), v.minLength(1, "Required")),
  kelurahan: v.pipe(v.string(), v.minLength(1, "Required")),
  kota: v.pipe(v.string(), v.minLength(1, "Required")),
  kecamatan: v.pipe(v.string(), v.minLength(1, "Required")),
  namaAyah: v.pipe(v.string(), v.minLength(1, "Required")),
  anakKe: v.number(),
  dariBersaudara: v.number(),
  suku: v.pipe(v.string(), v.minLength(1, "Required")),
  pendidikan: v.pipe(v.string(), v.minLength(1, "Required")),
  pekerjaan: v.pipe(v.string(), v.minLength(1, "Required")),
  jurusan: v.pipe(v.string(), v.minLength(1, "Required")),
  tinggi: v.number(),
  berat: v.number(),
  hobi: v.pipe(v.string(), v.minLength(1, "Required")),
  kriteria: v.pipe(v.string(), v.minLength(1, "Required")),
  deskripsi: v.pipe(v.string(), v.minLength(1, "Required")),
  foto: v.pipe(v.string(), v.minLength(1, "Required")),
  instagram: v.pipe(v.string(), v.minLength(1, "Required")),
  gender: v.pipe(v.string(), v.minLength(1, "Required")),
});

export const resetSchema = v.object({
  password: v.pipe(v.string(), v.minLength(1, "Required")),
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

export type Schema = v.InferOutput<typeof schema>;
export type ResetSchema = v.InferOutput<typeof resetSchema>;

export const getInitialFormData = (): Schema => ({
  statusKawin: "",
  tanggalLahir: "",
  kota: "",
  kecamatan: "",
  kelurahan: "",
  provinsi: "",
  namaAyah: "",
  anakKe: 0,
  dariBersaudara: 0,
  jurusan: "",
  suku: "",
  pendidikan: "",
  pekerjaan: "",
  tinggi: 0,
  berat: 0,
  hobi: "",
  kriteria: "",
  deskripsi: "",
  foto: "",
  instagram: "",
  gender: "",
});

export const getInitialResetData = (): ResetSchema => ({
  password: "",
});
