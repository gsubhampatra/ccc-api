// routes/rssRoutes.js
import express from 'express';
import { getRssData } from '../controllers/rssController.js';

const router = express.Router();

router.get('/medium-blog', getRssData);

export default router;
