import express from "express"
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js"
import { authenticate, restrict } from "../auth/verifyToken.js"

const router = express.Router()

router.get('/:id', authenticate, restrict(["patient"]), getSingleUser)
router.get('/', authenticate, restrict(["admin"]), getAllUser)
router.put('/:id', authenticate, restrict(["patient"]), updateUser)
router.delete('/:id', authenticate, restrict(["patient"]), deleteUser)

<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> 13dffa6d13039c39f75a056470dd5ab5606a068c
