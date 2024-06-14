"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let getAppointment = function getAppointment(req, res) {
    res.status(200).json({
        res: "recibiste usuario",
        algo: "algo"
    });
};
let createAppointment = function createAppointment(req, res) {
    res.status(200).json({
        res: "creacion de usuario",
        algo: "algo"
    });
};
let putAppointmen = function putAppointmen(req, res) {
    res.status(200).json({
        res: "actualizaste usuario",
        algo: "algo"
    });
};
let deleteAppointmen = function deleteAppointmen(req, res) {
    res.status(200).json({
        res: "eliminaste usuario",
        algo: "algo"
    });
};
exports.default = {
    getAppointment,
    createAppointment,
    putAppointmen,
    deleteAppointmen,
};
