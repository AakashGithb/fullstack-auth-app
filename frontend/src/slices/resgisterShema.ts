import z from 'zod'


export const registershema=z.object({
    email:z.string().email({message:"invalid email credentials"}),
    password:z.string().min(6,{message:"invalid password credentials"})
})


export type registerinputtype=z.infer<typeof registershema>