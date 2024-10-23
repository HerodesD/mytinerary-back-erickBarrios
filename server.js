import express from "express";
import "dotenv/config.js";
import "./config/dataBase.js"
import cors from "cors";
import morgan from "morgan";
import indexRouter from './router/index.js'
import not_found_handler from "./middlewares/not_found_handler.js";
import error_400 from "./middlewares/error_bad_request.js";
import error_handler from "./middlewares/error_handler.js";



const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log("server ready in port " + PORT);

// middlewares to express: 

server.use(express.json()) // The requests to be received and answered are in json format.
server.use(express.urlencoded({ extended: true })) // Requests are in URL format, which is used to receive data from forms.
server.use(cors()) // Add security.
server.use(morgan('dev')) // adds logs, to trace requests and responses.


//router:
server.use('/api', indexRouter)

server.use(not_found_handler)
server.use(error_400)
server.use(error_handler)

server.listen(PORT, ready)


