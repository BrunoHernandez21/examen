"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appointmentController_1 = __importDefault(require("../controllers/appointmentController"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.header("x-token", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, API-KEY, X-TOKEN, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    next();
});
app.use((0, morgan_1.default)("common"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1/appointment', appointmentController_1.default);
exports.default = app;
