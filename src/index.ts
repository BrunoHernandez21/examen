import "reflect-metadata"
import app from "./config/app"; 
import dotenv from 'dotenv'; 
import { appDataSource } from "./config/database";

(async () => {
    dotenv.config();
    await appDataSource.initialize();
    app.listen(process.env.PORT, () => {
        console.log('Express server puerto %s: \x1b[32m%s\x1b[0m', process.env.port,'online');
    });
})();