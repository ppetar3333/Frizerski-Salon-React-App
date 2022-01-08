import express from "express";
 
import { 
    getAllKorisnici,
    loginKorisnici,
    deleteKorisnik
    } 
from "../controllers/KorisnikController.js";
 
const router = express.Router();
 
router.get('/', getAllKorisnici);
router.post('/:korisnickoIme/:lozinka', loginKorisnici)
router.delete('/:id', deleteKorisnik);
 
export default router;