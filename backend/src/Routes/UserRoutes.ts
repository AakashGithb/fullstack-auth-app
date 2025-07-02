import {Router} from  'express'

import loginController from '../Controlers/loginController.js'
import registerController from '../Controlers/registerController.js'


export const UserRoutes= Router()
UserRoutes.post('/register',registerController)
UserRoutes.post("/login",loginController)
