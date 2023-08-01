import sequelize from "../../db";

const { Apartments } = sequelize.models;

const deactivateAppController = async (id: number) => {
    try {
        const deactivateApp = await Apartments.update(
            { is_active: false },
            { 
                where: {
                    id_apartment: id,
                },
             }
        );
        return deactivateApp;
    } catch (error: any) {
        if(error) {
            throw new Error(error.message);
        } else {
            throw new Error("Ocurrio un Error");
        }
    }
};

export default deactivateAppController;