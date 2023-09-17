import * as z from 'zod';
export const ThreadValidation = z.object({
    thread:z.string().nonempty().min(3, {message:'Minimum 3 characters '}).max(3000),
    accountId: z.string(),
})

export const CommentValidation = z.object({
    thread:z.string().nonempty().min(1, {message:'Minimum 1 character '}).max(3000),
    accountId: z.string(),
})