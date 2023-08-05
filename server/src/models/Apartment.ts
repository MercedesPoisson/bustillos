import { DataTypes, Model, Sequelize } from "sequelize";
import { ApartmentsAttributes } from "./interfaces";

interface ApartmentsInstance extends Model<ApartmentsAttributes>, ApartmentsAttributes {}

const Apartment = (sequelize: Sequelize) => {
    sequelize.define<ApartmentsInstance>("Apartments", {
        id_apartment: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ap_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        floor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        room_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bath_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bed_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sofabed_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        room_one_bed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        room_two_bed: {
            type: DataTypes.STRING,
        },
        room_three_bed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estar_bed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        property_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        price_per_night: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        // rating: {
        //     type: DataTypes.FLOAT,
        //     allowNull: true,
        //     defaultValue: 0
        // },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        max_guests: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        min_nights: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        weekly_discount: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        monthly_discount: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        allow_pets: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        accessibility:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        },
        private_access:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        }

        
    })
}

export default Apartment;