import sequelize from "../../db";

const { Apartments, Rents } = sequelize.models;

const getAllAppController = async () => {
    try {
        const app = await Apartments.findAll({
            include:[{
                model:Rents
            }]
        });
        return app;
    } catch (error) {
        console.error(error);
        throw new Error("Error al obtener los departamentos")
    }
}
export default getAllAppController;