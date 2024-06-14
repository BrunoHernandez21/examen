import express, { Request,Response } from 'express';
import appointmentService from "../services/appointmentService";
import appointmentMiddlewares from '../middlewares/appointmentMiddlewares';
const app = express();

app.get('/all', appointmentService.getAllAppointment);

app.get('/:id', appointmentService.getAppointment);

app.post('/', [appointmentMiddlewares.inputAppointmentFormat], appointmentService.createAppointment);

app.put('/:id', [appointmentMiddlewares.isAuth],appointmentService.putAppointmen);

app.delete('/:id',[appointmentMiddlewares.isAuth], appointmentService.deleteAppointmen);

export default app;