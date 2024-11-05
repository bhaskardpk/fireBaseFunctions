import express from 'express';
import { authMiddleware } from '../middleware';
import { getUserDetails } from '../controller/userController';
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/getUserDetail', authMiddleware, getUserDetails);

export default router;
