import Korisnik from "../models/Korisnik.js";

export const getAllKorisnici = async (req, res) => {
    try {
        const korisnik = await Korisnik.findAll();
        res.json(korisnik);
    } catch (error) {
        res.json({ message: error.message });
    }  
}


export const loginKorisnici = async (req,res) => {
    try {
        const korisnik = await Korisnik.findAll({
            where: {
                korisnickoIme: req.params.korisnickoIme,
                lozinka: req.params.lozinka
            }
        })
        res.json(korisnik[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}