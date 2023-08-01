import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import multer from "multer";
import sequelize from "./db";
import router from "./routes";

const { Rents, Users, Apartments, Services } = sequelize.models

interface CustomError extends Error {
    status?: number;
}

const server: Express = express();

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    console.log("Hola");
    next();
  });
  server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  server.use(bodyParser.json({ limit: '50mb' }));
  server.use(morgan('dev'));

  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'src/public/images')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

server.use(upload.any())

server.use("/", router)

server.use((err: CustomError, req: Request, res: Response, next: NextFunction): void => {
    const status: number | undefined = err.status || 500;
    const message: string | undefined = err.message || err.toString();
    console.error(err);
    res.status(status).send(message)
});

export default server;