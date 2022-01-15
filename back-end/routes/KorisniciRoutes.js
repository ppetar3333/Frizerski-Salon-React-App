import express from "express";
 
import { 
    getAllKorisnici,
    loginKorisnici,
    deleteKorisnik,
    createKorisnik
    } 
from "../controllers/KorisnikController.js";
 
const router = express.Router();
 
router.get('/', getAllKorisnici);
router.post('/:korisnickoIme/:lozinka', loginKorisnici)
router.delete('/:id', deleteKorisnik);
router.post('/create', createKorisnik);
 
export default router;