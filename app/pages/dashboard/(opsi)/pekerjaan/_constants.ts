import { z } from "zod";

export const columns = [
  {
    key: "name",
    label: "Nama Suku",
    sortable: true,
  },
];

export const schema = z.object({
  id: z.number().optional(),
  name: z.string(),
});

export type Schema = z.output<typeof schema>;

export const getInitialFormData = (): Partial<Schema> => ({
  id: undefined,
  name: undefined,
});
