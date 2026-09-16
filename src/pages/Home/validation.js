import {z} from 'zod';

export const homeSchema = z.object({
    name: z
        .string()
        .nanoid("невірно вказано name"),
    price: z
        .string()
        .min(10,"price must be greater than 0"),
    manufacturer: z
        .string()
        .nanoid("невірно вказано manufacturer"),
    category: z
        .string()
        .nanoid("невірно вказано category"),
});