import express from "express";
 
import { 
    getAllKorisnici,
    loginKorisnici,
    samoFrizeri
    } 
from "../controllers/KorisnikController.js";
 
const router = express.Router();
 
router.get('/', getAllKorisnici);
router.post('/:korisnickoIme/:lozinka', loginKorisnici)
router.get('/samoFrizeri', samoFrizeri)
 
export default router;