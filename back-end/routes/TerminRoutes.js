import express from "express";

import { 
    acceptTermin, 
    createTermin, 
    deleteTermin, 
    getAllTermini 
} from '../controllers/TerminController.js';

const router = express.Router();

router.get('/', getAllTermini);
router.patch('/accept/:id', acceptTermin);
router.delete('/delete/:id', deleteTermin);
router.post('/create', createTermin);

export default router;