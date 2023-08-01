require("dotenv").config();
import { Sequelize } from "sequelize";
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
import User from "./models/User";
import Apartment from "./models/Apartment";
import Rent from "./models/Rent";
import Service from "./models/Service";

const sequelize: any = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/bustillos7500`, {
    logging: false, 
    native: false, 
  });
  
  User(sequelize);
Apartment(sequelize);
Rent(sequelize);
Service(sequelize);

const { Users, Apartments, Rents, Services } = sequelize.models;

Users.hasMany(Rents, { foreignKey: "id_user" });
Services.belongsToMany(Apartments, { through: "Apartments_Services" });
Apartments.belongsToMany(Services, { through: "Apartments_Services" });
Apartments.hasMany(Rents, { foreignKey: 'id_apartment' }); // Cambiar 'id_apartments' por 'id_apartment'
Rents.belongsTo(Users, { foreignKey: 'id_user' });
Rents.belongsTo(Apartments, { foreignKey: 'id_apartment' }); // Cambiar 'id_apartments' por 'id_apartment'

export default sequelize;