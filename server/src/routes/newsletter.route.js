import express from 'express'
import newsLetterController from '../controllers/newsletter.controller.js'

const router = express.Router()

router.post('/', newsLetterController.postMail)

export default router;