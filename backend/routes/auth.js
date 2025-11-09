import express from "express"
import { login, register } from "../controllers/authController.js"

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> 13dffa6d13039c39f75a056470dd5ab5606a068c
