import { Request,Response } from "express";
import { Appointment } from "../entity/appointment";
import { User } from "../entity/user";
import { DeleteResult, UpdateResult } from "typeorm";

const getAllAppointment = async (req:Request,res:Response) => {
    let appointments: Appointment[] = [];
    try{
        appointments = await Appointment.find();
    } catch(error){
        if (error instanceof Error) res.status(500).json({error: error.message});
        return;    
    }
    res.status(200).json(appointments);
}

const getAppointment = async (req:Request,res:Response) => {
    let appointments: Appointment | null;
    try{
        appointments = await Appointment.findOneBy({ id: Number(req.params["id"]) });
    } catch(error){
        if (error instanceof Error) res.status(500).json({error: error.message});
        return;
    }
    if (!appointments){
        res.status(404).json({description: "no se encontro la cita"});
        return;
    }
    res.status(200).json(appointments);
}

const createAppointment = async (req:Request,res:Response) => {
    const {curp, dateAppointment} = req.body;
    let user : User| null;
    try{
        user = await User.findOneBy({ curp: curp });
    } catch(error){
        if (error instanceof Error) res.status(500).json({error: error.message});
        return;
    }
    if (!user){
        const user = new User();
        user.curp = curp; 
        try{
            await user.save();
        } catch(error){
            if (error instanceof Error) res.status(500).json({error: error.message});
            return;
        }
    }
    let existApoitment: Appointment | null = null; 
    try{
        existApoitment = await Appointment.findOne(
            { where:
                { curp: curp, dateOfAppointment: dateAppointment },
            }
        );
    } catch(error){
        if (error instanceof Error) res.status(500).json({error: error.message});
        return;
    }
    if (existApoitment){
        res.status(403).json({description:"ya existe cita agendada para usted este dia"});
        return;
    }

    const appointment: Appointment  = new Appointment(); 
    appointment.curp = curp;
    appointment.dateOfAppointment = dateAppointment;
    await appointment.save();
    try{
        await appointment.save();
    } catch(error){
        if (error instanceof Error) res.status(500).json({error: error.message});
        return;
    }

    res.status(200).json(appointment);
}

const putAppointmen = async (req:Request,res:Response) => {
    if (req.body['dateOfAppointment'] == null){
        res.status(400).json({error: "Ingrese una fecha a cambiar"});
        return;
    }
    let result: UpdateResult | null;
    try{
        result = await Appointment.update({id: Number(req.params["id"])},{dateOfAppointment:req.body['dateOfAppointment']});
    } catch(error){
        if (error instanceof Error) res.status(400).json({error: "no se encontro su cita"});
        return;
    }
    if (result.affected === 0 ){
        res.status(404).json({description: "no se encontro la cita"});
        return;
    }
    res.status(200).json({
        description:"Actualizado correctamente"
    });
}

const deleteAppointmen = async (req:Request,res:Response) => {
    let result: DeleteResult | null;
    try{
        result = await Appointment.delete({id: Number(req.params["id"])})
    } catch(error){
        if (error instanceof Error) res.status(500).json({error: error.message});
        return;
    }
    if (result.affected === 0 ){
        res.status(404).json({description: "no se encontro la cita"});
        return;
    }
    
    res.sendStatus(204);
}

export default {
    getAllAppointment,
    getAppointment,
    createAppointment,
    putAppointmen,
    deleteAppointmen,
};