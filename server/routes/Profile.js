import express from 'express';
import {
  PostProfile,
  GetProfile,
  UpdateProfile,
  GetMe,
} from '../cotrolerRoutes/ProfileController.js';

const router = express.Router();

router.post('/', PostProfile);
router.get('/:username', GetProfile);
router.get('/:username/Me', GetMe);
router.put('/', UpdateProfile);

export default router;
