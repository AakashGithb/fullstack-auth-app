import {Router} from  'express'
import registerController from '../Controlers/registerController.js'
import loginController from '../Controlers/loginController.js'


export const UserRoutes= Router()
UserRoutes.post('/register',registerController)
UserRoutes.post("/login",loginController)
