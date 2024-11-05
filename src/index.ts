import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoute';
import questionRoutes from './routes/questionRoute';

export const appinitialized = admin.initializeApp();

const app = express();
app.use(cors({origin: true}));
app.use(express.json()); // For parsing application/json
app.use('/v1/user', userRoutes);
app.use('/v1/question', questionRoutes);
exports.api = functions.https.onRequest(app);
