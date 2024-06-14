import { DataSource } from "typeorm";
import dotenv from 'dotenv'; 
import { Appointment } from "../entity/appointment";
import { User } from "../entity/user";
dotenv.config();

export const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    entities: [Appointment,User],
    subscribers: [],
    migrations: [],
    logging: false,
})