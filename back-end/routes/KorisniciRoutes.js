import express from "express";
 
import { getAllKorisnici } from "../controllers/KorisnikController.js";
 
const router = express.Router();
 
router.get('/', getAllKorisnici);
 
export default router;