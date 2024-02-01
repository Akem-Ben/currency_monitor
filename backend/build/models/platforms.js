"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../database/index");
class Platform extends sequelize_1.Model {
}
exports.Platform = Platform;
Platform.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    platform_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    platform_last_traded: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    platform_buy_price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    platform_sell_price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    platform_volume: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    platform_base_unit: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: index_1.database,
    tableName: "Platform",
});
exports.default = Platform;
