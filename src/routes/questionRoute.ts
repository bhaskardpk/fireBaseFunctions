import express from 'express';
import { authMiddleware } from '../middleware';
import { getFrequentlyAskedQuestions } from '../controller/questionController';
// eslint-disable-next-line new-cap
const router = express.Router();

router.get(
    '/getFrequentlyAskedQuestion',
    authMiddleware,
    getFrequentlyAskedQuestions
);

export default router;
