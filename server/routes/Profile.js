import express from 'express';
import { PostProfile, GetProfile, UpdateProfile } from '../cotrolerRoutes/ProfileController.js';

const router = express.Router();

router.post('/', PostProfile);
router.get('/:username', GetProfile);
router.put('/', UpdateProfile);

export default router;
