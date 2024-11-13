import { z } from "zod";

export const columns = [
  {
    key: "namaLengkap",
    label: "Nama Lengkap",
    sortable: true,
  },
  {
    key: "gender",
    label: "Jenis Kelamin",
  },
  {
    key: "noTelepon",
    label: "No. Telepon",
  },
  {
    key: "isActive",
    label: "Status",
  },
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

export const schema = z
  .object({
    id: z.number().optional(),
    username: z.string(),
    password: z.string(),
    namaLengkap: z.string(),
    noTelepon: z.string(),
    gender: z.string(),
    isActive: z.boolean(),
  })
  .refine((data) => (data.id ? true : data.password.length < 8), {
    message: "Karakter harus 8 atau lebih",
    path: ["password"],
  });

export type Schema = z.output<typeof schema>;

export const getInitialFormData = (): Partial<Schema> => ({
  id: undefined,
  username: undefined,
  password: undefined,
  namaLengkap: undefined,
  noTelepon: undefined,
  gender: undefined,
  isActive: false,
});
