"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appointment_1 = require("../entity/appointment");
const isAuth = async (req, res, next) => {
    var _a;
    if (!req.headers['curp']) {
        res.status(400).json({
            description: "Ingrese el header curp",
        });
        return;
    }
    let appointment;
    try {
        appointment = await appointment_1.Appointment.findOneBy({
            id: req.body.id,
            curp: (_a = req.headers['curp']) === null || _a === void 0 ? void 0 : _a.toString()
        });
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
        return;
    }
    if (!appointment) {
        res.status(400).json({
            description: "No tiene permiso de acceder a este recurso",
        });
        return;
    }
    next();
};
const inputAppointmentFormat = (req, res, next) => {
    if (req.body["curp"] != null && req.body["dateAppointment"] != null) {
        next();
        return;
    }
    res.status(400).json({
        descriptionError: "Datos insuficientes, curp y dateAppointment son necesarios",
    });
};
exports.default = {
    isAuth,
    inputAppointmentFormat,
};
