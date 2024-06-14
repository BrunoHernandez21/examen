"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appointmentService_1 = __importDefault(require("../services/appointmentService"));
const appointmentMiddlewares_1 = __importDefault(require("../middlewares/appointmentMiddlewares"));
const app = (0, express_1.default)();
app.get('/all', appointmentService_1.default.getAllAppointment);
app.get('/:id', appointmentService_1.default.getAppointment);
app.post('/', [appointmentMiddlewares_1.default.inputAppointmentFormat], appointmentService_1.default.createAppointment);
app.put('/:id', [appointmentMiddlewares_1.default.isAuth], appointmentService_1.default.putAppointmen);
app.delete('/:id', [appointmentMiddlewares_1.default.isAuth], appointmentService_1.default.deleteAppointmen);
exports.default = app;
