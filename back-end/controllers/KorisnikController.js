import Korisnik from "../models/Korisnik.js";

export const getAllKorisnici = async (req, res) => {
    try {
        const korisnik = await Korisnik.findAll();
        res.json(korisnik);
    } catch (error) {
        res.json({ message: error.message });
    }  
}