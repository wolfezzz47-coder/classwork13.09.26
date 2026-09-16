import {z} from 'zod';

export const registerSchema = z.object({
    email: z
        .string()
        .email("невірно вказано почту"),
    password: z
        .string()
        .min(6,"Пароль має мати 6 символів"),
    confirmPassword: z
        .string()
        .min(6,"Пароль має мати 6 символів"),
})
    .refine(data => data.password === data.confirmPassword, {
        message: "Паролі не співпадають",
        path: ["confirmPassword"],
    });