import sequelize from "../../db";

const { Services } = sequelize.models;

const getServicesController = async () => {
    try {
        const response = await Services.findAll();
        if (response) return response;
        else throw new Error("No services found");
    } catch (error) {
        throw error;
    }
};

export default getServicesController;