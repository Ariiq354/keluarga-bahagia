import { z } from "zod";

export const registerSchema = z.object({
  username: z.string(),
  password: z.string().min(8, "Harus terdiri dari setidaknya 8 karakter."),
  namaLengkap: z.string(),
  noTelepon: z.string(),
  gender: z.string(),
  email: z.string(),
});

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

export type Schema = z.output<typeof registerSchema>;

export const getInitialFormData = (): Partial<Schema> => ({
  username: undefined,
  password: undefined,
  namaLengkap: undefined,
  noTelepon: undefined,
  gender: undefined,
  email: undefined,
});
