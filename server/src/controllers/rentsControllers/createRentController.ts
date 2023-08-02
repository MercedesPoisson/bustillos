import sequelize from "../../db";

const { Rents, Apartments, Users } = sequelize.models;

const createRentController = async (rentData: any) => {
    const rent = await Rents.create(rentData);
    const app = await Apartments.findByPk(rent.id_apartment);

    if (app) {
        await rent.setApartment(app)
    }
    else throw new Error("Departamento no encontrado")
    return rent;
}

export default createRentController;