
import express from 'express';
import authController from '../controllers/appointmentController';
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(
    function(req:any, res:any, next:any) {
        res.header("x-token", "*");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, Authorization, API-KEY, X-TOKEN, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
        next();
    }
);
app.use(morgan("common"));
app.use(cors())
app.use(express.json());
app.use('/api/v1/appointment', authController);

export default app;