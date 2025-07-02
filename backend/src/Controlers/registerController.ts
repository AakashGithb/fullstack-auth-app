
import { PrismaClient } from '@prisma/client'

import { Request, Response } from 'express'


const prisma = new PrismaClient()

const registerController = async (req: Request, res: Response) => {
   try {

      const { email, password } = req.body
      const existinguser=await prisma.user.findUnique({
         where:{email},
      })

      if(existinguser){
           res.status(400).json({message:"email already exists"})
         
      }

      const register = await prisma.user.create({ data: { email, password }, })
      const { password: _, ...dataWithoutPass } = register
      res.status(201).json({ message: "User Registered Successfully", userdata: dataWithoutPass })
       
   } catch (error) {
       res.status(500).json({ error: "error" })
   }
}


export default registerController