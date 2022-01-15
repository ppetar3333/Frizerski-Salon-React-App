import Termin from '../models/Termin.js';

export const getAllTermini = async (req, res) => {
    try {
        const termin = await Termin.findAll();
        res.json(termin);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const acceptTermin = async (req, res) => {
    try {
        await Termin.update(req.body, {
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

export const deleteTermin = async (req, res) => {
    try {
        await Termin.destroy({
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

export const createTermin = async (req, res) => {
    try {
        await Termin.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}