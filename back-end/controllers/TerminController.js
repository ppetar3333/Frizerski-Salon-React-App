import Termin from '../models/Termin.js';

export const getAllTermini = async (req, res) => {
    try {
        const termin = await Termin.findAll();
        res.json(termin);
    } catch (error) {
        res.json({ message: error.message });
    }  
}