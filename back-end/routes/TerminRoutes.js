import express from "express";

import { getAllTermini } from '../controllers/TerminController.js';

const router = express.Router();

router.get('/', getAllTermini);

export default router;