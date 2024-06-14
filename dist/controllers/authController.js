"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// var mdAutenticacion = require('../../middlewares/autenticacion');   //guards
const appointmentService_1 = __importDefault(require("../services/appointmentService"));
let app = (0, express_1.default)();
app.get('/:id', [], appointmentService_1.default.getAppointment);
app.post('/', [], appointmentService_1.default.createAppointment);
app.put('/', [], appointmentService_1.default.putAppointmen);
app.delete('/:id', [], appointmentService_1.default.deleteAppointmen);
exports.default = app;
