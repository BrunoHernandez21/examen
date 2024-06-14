"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./config/app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app_1.default.listen(process.env.port, () => {
    //TODO: retirar
    console.log('Express server puerto %s: \x1b[32m%s\x1b[0m', process.env.port, 'online');
});
// var mongoose = require('mongoose');
// var app = require('./app');
// var port = process.env.PORT || 25565;
// mongoose.Promise = global.Promise;
// //inicias la conencciopn con la base de datos
// mongoose.connect("mongodb://localhost:27017/servicios", {  useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true  }, (err, res) => {
//     if (err) throw err;//en caso de error manda el error y deten todo
//     //inicias el servidor
//     app.listen(port, () => {
//         //TODO: retirar
//         console.log('Express server puerto %s: \x1b[32m%s\x1b[0m', port,'online');
//     });
// }); 
// // instance webSock
// const {server} = require('./src/websock/websock');
// // db conection
// const conexion = require('./src/db/db');
// //Start Database
// conexion.connect(function(err) {
//     if (err) {
//         console.error('Error de conexion: ' + err.stack);
//         return;
//     }
//     console.log('Identificador de la base de datos ' + conexion.threadId);
//     //StartServer
//     server.listen(process.env.PORT, (err) => {
//         if (err) throw new Error(err);
//         console.log("Server run on Port: %d",process.env.PORT)    
//     });
// });
