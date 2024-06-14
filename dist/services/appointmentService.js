"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appointment_1 = require("../entity/appointment");
const user_1 = require("../entity/user");
const getAllAppointment = async (req, res) => {
    let appointments = [];
    try {
        appointments = await appointment_1.Appointment.find();
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
        return;
    }
    res.status(200).json(appointments);
};
const getAppointment = async (req, res) => {
    let appointments;
    try {
        appointments = await appointment_1.Appointment.findOneBy({ id: Number(req.params["id"]) });
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
        return;
    }
    if (!appointments) {
        res.status(404).json({ description: "no se encontro la cita" });
        return;
    }
    res.status(200).json(appointments);
};
const createAppointment = async (req, res) => {
    const { curp, dateAppointment } = req.body;
    let user;
    try {
        user = await user_1.User.findOneBy({ curp: curp });
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
        return;
    }
    if (!user) {
        const user = new user_1.User();
        user.curp = curp;
        try {
            await user.save();
        }
        catch (error) {
            if (error instanceof Error)
                res.status(500).json({ error: error.message });
            return;
        }
    }
    let existApoitment = null;
    try {
        existApoitment = await appointment_1.Appointment.findOne({ where: { curp: curp, dateOfAppointment: dateAppointment },
        });
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
        return;
    }
    if (existApoitment) {
        res.status(403).json({ description: "ya existe cita agendada para usted este dia" });
        return;
    }
    const appointment = new appointment_1.Appointment();
    appointment.curp = curp;
    appointment.dateOfAppointment = dateAppointment;
    await appointment.save();
    try {
        await appointment.save();
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
        return;
    }
    res.status(200).json(appointment);
};
const putAppointmen = async (req, res) => {
    if (req.body['dateOfAppointment'] == null) {
        res.status(400).json({ error: "Ingrese una fecha a cambiar" });
        return;
    }
    let result;
    try {
        result = await appointment_1.Appointment.update({ id: Number(req.params["id"]) }, { dateOfAppointment: req.body['dateOfAppointment'] });
    }
    catch (error) {
        if (error instanceof Error)
            res.status(400).json({ error: "no se encontro su cita" });
        return;
    }
    if (result.affected === 0) {
        res.status(404).json({ description: "no se encontro la cita" });
        return;
    }
    res.status(200).json({
        description: "Actualizado correctamente"
    });
};
const deleteAppointmen = async (req, res) => {
    let result;
    try {
        result = await appointment_1.Appointment.delete({ id: Number(req.params["id"]) });
    }
    catch (error) {
        if (error instanceof Error)
            res.status(500).json({ error: error.message });
        return;
    }
    if (result.affected === 0) {
        res.status(404).json({ description: "no se encontro la cita" });
        return;
    }
    res.sendStatus(204);
};
exports.default = {
    getAllAppointment,
    getAppointment,
    createAppointment,
    putAppointmen,
    deleteAppointmen,
};
