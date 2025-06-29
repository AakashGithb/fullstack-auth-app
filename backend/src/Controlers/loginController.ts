
import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma=new PrismaClient()

const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const existinguser = await prisma.user.findUnique({ where: {email}})

        if (!existinguser || existinguser.password != password) {
           
            res.status(404).json({ message: "invalid credential" })
        }
        else {
             const {password:_,...dataWithoutPass}=req.body
            res.status(200).json({ message: "Login successful", existinguser:dataWithoutPass });
        }

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export default loginController