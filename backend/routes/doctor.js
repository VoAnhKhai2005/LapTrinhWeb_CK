import express from "express"
import { deleteDoctor, getAllDoctor, getSingleDoctor, updateDoctor } from "../controllers/doctorController.js"
import { authenticate, restrict } from "../auth/verifyToken.js"
import reviewRouter from './review.js'

const router = express.Router()

// nested route
router.use('/:doctorId/reviews', reviewRouter)

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.put('/:id', authenticate, restrict(["doctor"]), updateDoctor)
router.delete('/:id', authenticate, restrict(["doctor"]), deleteDoctor)

<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> 13dffa6d13039c39f75a056470dd5ab5606a068c
