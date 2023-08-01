import sequelize from "../../db";
import { ApartmentsAttributes } from "../../models/interfaces";

const { Apartments, Services } = sequelize.models;
interface Apartment_Services extends ApartmentsAttributes {
  services?: string[];
}

const createAppController = async (
  newApp: Partial<Apartment_Services>
): Promise<ApartmentsAttributes> => {
  try {
    console.log('Inside createAppController...');
    const services: string[] | undefined = newApp.services;
    console.log('services:', services);
    const app: any = await Apartments.create(newApp);
    console.log('Created app:', app);

    if (services && services.length > 0) {
      const servicesFromDb = await Services.findAll({
        where: { name: services },
      });
      await app.addServices(servicesFromDb);
    }
    return app;
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};

export default createAppController;
