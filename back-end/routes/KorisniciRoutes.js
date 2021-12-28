import express from "express";
 
import { 
    getAllKorisnici,
    loginKorisnici
    } 
from "../controllers/KorisnikController.js";
 
const router = express.Router();
 
router.get('/', getAllKorisnici);
router.post('/:korisnickoIme/:lozinka', loginKorisnici)
 
export default router;