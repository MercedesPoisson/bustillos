import { DataTypes, Model, Sequelize } from "sequelize";
import { ApartmentsAttributes, ServicesAttributes } from "./interfaces";

interface ServicesInstace extends Model<ServicesAttributes>, ServicesAttributes {}

const Service = (sequelize: Sequelize) => {
    sequelize.define<ServicesInstace>("Services", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        timestamps: false
    }
    )
}

export default Service;