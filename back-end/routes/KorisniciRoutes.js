import express from "express";
 
import { 
    getAllKorisnici,
    loginKorisnici,
    deleteKorisnik,
    createKorisnik,
    updateKorisnik
    } 
from "../controllers/KorisnikController.js";
 
const router = express.Router();
 
router.get('/', getAllKorisnici);
router.post('/:korisnickoIme/:lozinka', loginKorisnici)
router.delete('/:id', deleteKorisnik);
router.post('/create', createKorisnik);
router.patch('/:id', updateKorisnik);
 
export default router;