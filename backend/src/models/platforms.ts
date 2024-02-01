import { DataTypes, Model } from "sequelize";
import { database } from "../database/index";


export interface PlatformAttributes {
  id?: string;
  platform_name?: string;
  platform_last_traded?: string;
  platform_buy_price: string;
  platform_sell_price: string;
  platform_volume: string;
  platform_base_unit: string;
}

export class Platform extends Model<PlatformAttributes> {}

Platform.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    platform_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform_last_traded: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform_buy_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform_sell_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform_volume: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform_base_unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "Platform",
  }
);

export default Platform;