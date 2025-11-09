import express from 'express'
import { getAllReviews, createReview } from '../controllers/reviewController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'

const router = express.Router({ mergeParams: true })

router
  .route('/')
  .get(getAllReviews)
  .post(authenticate, restrict(["patient"]), createReview)

<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> 13dffa6d13039c39f75a056470dd5ab5606a068c
