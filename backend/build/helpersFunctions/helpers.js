"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fetchData = async () => {
    const movies = await axios_1.default.get(`https://api.wazirx.com/api/v2/tickers`);
    return movies.data;
};
exports.fetchData = fetchData;
