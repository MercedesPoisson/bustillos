import sequelize from "../../db";

const { Rents } = sequelize.models;

const deleteRentController = async (id_rent: number) => {
    try {
        console.log("Trying to delete rent with ID:", id_rent);
        
        const deleteRent = await Rents.destroy({ where: { id_rent } });
        console.log("Deleted rent:", deleteRent);
        
        return deleteRent;
    } catch (error) {
        console.error("Error in deleteRentController:", error);
        throw new Error("Error al borrar la reserva");        
    }
};

export default deleteRentController;