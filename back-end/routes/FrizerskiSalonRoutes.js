import express from "express";
 
import { 
    getAllFrizerskiSalon,
    createFrizerskiSalon,
    getFrizerskiSalonbyId,
    updateFrizerskiSalon,
    deleteFrizerskiSalon
} from "../controllers/FrizerskiSalonController.js";
 
const router = express.Router();
 
router.get('/', getAllFrizerskiSalon);
router.get('/:id', getFrizerskiSalonbyId);
router.post('/', createFrizerskiSalon);
router.patch('/change/:id', updateFrizerskiSalon);
router.delete('/:id', deleteFrizerskiSalon);
 
export default router;