import { Request,Response } from 'express';
import { Appointment } from '../entity/appointment';

const isAuth = async (req:Request, res:Response, next:any)=> {
    if (!req.headers['curp']){
        res.status(400 ).json({
            description: "Ingrese el header curp",
        });
        return;
    }
    let appointment: Appointment | null;
    try{
        appointment = await Appointment.findOneBy({
            id:req.body.id,
            curp: req.headers['curp']?.toString()
        })
    } catch(error){
        if (error instanceof Error) res.status(500).json({error: error.message});
        return;    
    }
    
    if (!appointment){
        res.status(400 ).json({
            description: "No tiene permiso de acceder a este recurso",
        });
        return;
    }
    next();
}

const inputAppointmentFormat = (req:Request, res:Response, next:any)=>{
    if (req.body["curp"] != null && req.body["dateAppointment"] != null) {
        next();
        return;
    }
    res.status(400 ).json({
        descriptionError: "Datos insuficientes, curp y dateAppointment son necesarios",
    });

}

export default {
    isAuth,
    inputAppointmentFormat,
};