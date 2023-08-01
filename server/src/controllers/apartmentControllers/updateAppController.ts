import sequelize from "../../db";

const { Apartments, Services } = sequelize.models;

const updateAppController = async (id: number, updatedValues: Partial<typeof Apartments>) => {
    const { services } = updatedValues;

    try {
        await Apartments.update(updatedValues, {
            where: {
                id_apartment: id,
            },
        });

        if(services && Array.isArray(services)) {
            const app = await Apartments.findbyPk(id);
            await app.setServices([]);
            const servicesDb = await Services.findAll({
                where: { name: services },
            });
            await app.addServices(servicesDb);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("Error al actualizar datos")
        }
    }
}

export default updateAppController;