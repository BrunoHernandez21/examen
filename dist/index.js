"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./config/app"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
(async () => {
    dotenv_1.default.config();
    await database_1.appDataSource.initialize();
    app_1.default.listen(process.env.PORT, () => {
        console.log('Express server puerto %s: \x1b[32m%s\x1b[0m', process.env.port, 'online');
    });
})();
