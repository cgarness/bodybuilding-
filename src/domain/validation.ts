import { z } from "zod";
export const importSchema=z.object({version:z.number(),metrics:z.array(z.object({date:z.string()})).optional(),sessions:z.array(z.object({id:z.string(),dayId:z.string(),startedAt:z.string()})).optional()}).passthrough();
export const validateImport=(data:unknown)=>importSchema.safeParse(data);
