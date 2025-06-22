import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";
import Hotel from "./hotel";
import RoomCategory from "./roomCategory";

class Room extends Model<InferAttributes<Room>, InferCreationAttributes<Room>> {
    declare id: CreationOptional<number>;
    declare hotelId: number;
    declare roomCategoryId: number;
    declare dateOfAvailability: Date;
    declare bookingId?: number | null;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date> | null;
}

Room.init({
    id: {
        type: 'INTEGER',
        autoIncrement: true,
        primaryKey: true
    },
    hotelId: {
        type: 'INTEGER',
        allowNull: false,
        references: {
            model: Hotel,
            key: 'id'
        }
    },
    roomCategoryId: {
        type: 'INTEGER',
        allowNull: false,
        references: {
            model: RoomCategory,
            key: 'id'
        }
    },
    dateOfAvailability: {
        type: 'DATE',
        allowNull: false,
    },
    createdAt: {
        type: 'DATE',
        defaultValue: new Date(),
    },
    updatedAt: {
        type: 'DATE',
        defaultValue: new Date(),
    },
    deletedAt: {
        type: 'DATE',
        defaultValue: null,
    },
}, {
    sequelize: sequelize,
    tableName: 'rooms',
    timestamps: true,
    paranoid: true,
    underscored: true,
});

export default Room;