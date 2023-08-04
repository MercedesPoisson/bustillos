require("dotenv").config();
import { Sequelize } from "sequelize";
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
import User from "./models/User";
import Apartment from "./models/Apartment";
import Rent from "./models/Rent";
import Service from "./models/Service";
import Price from "./models/Price";

const sequelize: any = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/bustillos7500`, {
    logging: false, 
    native: false, 
  });
  
User(sequelize);
Apartment(sequelize);
Rent(sequelize);
Service(sequelize);
Price(sequelize);

const { Users, Apartments, Rents, Services, Prices } = sequelize.models;

Users.hasMany(Rents, { foreignKey: "id_user" });
Services.belongsToMany(Apartments, { through: "Apartments_Services" });
Apartments.belongsToMany(Services, { through: "Apartments_Services" });
Apartments.hasMany(Rents, { foreignKey: 'id_apartment' }); 
Rents.belongsTo(Users, { foreignKey: 'id_user' });
Rents.belongsTo(Apartments, { foreignKey: 'id_apartment' }); 

//faltan las relaciones con la tabla price

// Relación uno a muchos entre Apartments y Price
Apartments.hasMany(Prices, { foreignKey: 'apartment_id' });
Prices.belongsTo(Apartments, { foreignKey: 'apartment_id' });

// Relación uno a muchos entre Rents y Price
Rents.hasMany(Prices, { foreignKey: 'rent_id' });
Prices.belongsTo(Rents, { foreignKey: 'rent_id' });

export default sequelize;