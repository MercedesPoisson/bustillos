import sequelize from "../../db";

const { Rents, Apartments } = sequelize.models;

const getAllRentsController = async() => {
    try {
        const rents = await Rents.findAll({
            include:[{
                model: Apartments
            }]
        })
        return rents
    } catch (error) {
        throw new Error("Error al obtener las reservas")
    }
}
export default getAllRentsController;