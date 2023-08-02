import sequelize from "../../db";

const { Apartments, Rents } = sequelize.models;

const updateRentController = async(id: number, updatedValues: Partial<typeof Rents>) => {
    try {
        const existingRent = await Rents.findByPk(id);
        if(!existingRent) {
            throw new Error("Reserva no encontrada");
        }
        await existingRent.update(updatedValues);
        if (updatedValues.Apartments) {
            const { id_apartment, ...apartmentDetail } = updatedValues.Apartments;
            const existingApartment = await Apartments.findByPk(id_apartment);
            if(!existingApartment) {
                throw new Error("Departamento no encontrado");
            } 
            await existingApartment.update(apartmentDetail);            
        }
    } catch (error) {
        throw new Error("Error al actualizar la reserva");
        
    }
}
export default updateRentController;