import { DataTypes, Model, Sequelize } from "sequelize";
import { PriceAttributes } from "./interfaces";
import sequelize from "../db";

interface PriceInstance extends Model<PriceAttributes>, PriceAttributes { }

const Price = (sequelize: Sequelize) => {
    sequelize.define<PriceInstance>("Prices", {
        id_price: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false
        },
        id_apartment: {
            type: DataTypes.INTEGER,
            references: {
                model: "Apartments",
                key: "id_apartment"
            }
        },
        key_word: {
            type: DataTypes.STRING,
            allowNull: true
        },
        guests_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price_per_night: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATEONLY, 
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
    })
}

export default Price