import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare address: string;
    declare location: string;
    declare rating: number;
    declare ratingCount: number;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date>;
}

Hotel.init(
    {
        id: {
            type: 'INTEGER',
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: 'STRING',
            allowNull: false,
        },
        address: {
            type: 'STRING',
            allowNull: false,
        },
        location: {
            type: 'STRING',
            allowNull: false,
        },
        rating: {
            type: 'DECIMAL(2, 1)',
            defaultValue: 0.0,
            allowNull: false,
        },
        ratingCount: {
            type: 'INTEGER',
            defaultValue: 0,
            allowNull: false,
        },
        createdAt: {
            type: "DATE",
            defaultValue: new Date(),
        },
        updatedAt: {
            type: "DATE",
            defaultValue: new Date(),
        },
        deletedAt: {
            type: "DATE",
            allowNull: true,
            defaultValue: null,
        }
    },
    {
        sequelize: sequelize,
        tableName: 'hotels',
        timestamps: true,
        underscored: true,
        paranoid: true,
    }
);

export default Hotel;