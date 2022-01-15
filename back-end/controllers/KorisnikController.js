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

export const deleteKorisnik = async (req, res) => {
    try {
        await Korisnik.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createKorisnik = async (req, res) => {
    try {
        await Korisnik.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const updateKorisnik = async (req, res) => {
    try {
        await Korisnik.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}