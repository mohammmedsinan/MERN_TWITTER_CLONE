import express from 'express';
import { PostProfile, GetProfile } from '../cotrolerRoutes/ProfileController.js';

const router = express.Router();

router.post('/', PostProfile);
router.get('/', GetProfile);

export default router;
