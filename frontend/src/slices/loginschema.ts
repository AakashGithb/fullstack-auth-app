import z from "zod";

export const loginschema=z.object({
    email:z.string().email({message:"invalid email credentials"}),
    password:z.string().min(6,{message:"invalid pass credentials"})
})

export type logininputtype=z.infer<typeof loginschema>