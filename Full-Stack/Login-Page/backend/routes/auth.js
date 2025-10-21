import express from 'express'
const router = express.Router()
import userController from '../controllers/User'

router.get('/register', userController)

// module.exports = router
export default router;