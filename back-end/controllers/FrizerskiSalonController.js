import FrizerskiSalon from "../models/FrizerskiSalon.js";
 
export const getAllFrizerskiSalon = async (req, res) => {
    try {
        const fSalon = await FrizerskiSalon.findAll();
        res.json(fSalon);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getFrizerskiSalonbyId = async (req, res) => {
    try {
        const fSalon = await FrizerskiSalon.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(fSalon[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createFrizerskiSalon = async (req, res) => {
    try {
        await FrizerskiSalon.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateFrizerskiSalon = async (req, res) => {
    try {
        await FrizerskiSalon.update(req.body, {
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
 
export const deleteFrizerskiSalon = async (req, res) => {
    try {
        await FrizerskiSalon.destroy({
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