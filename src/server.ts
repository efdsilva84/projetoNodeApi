import express, { Request, Response, ErrorRequestHandler  } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';
import cors from 'cors';
import { MulterError } from 'multer';

dotenv.config();

const server = express();



server.use(cors());

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

const errorHandler: ErrorRequestHandler =(err,req, res, next)=>{
    res.status(400);
    if(err instanceof MulterError){
        res.json({
            error: err.code
        })
    }else{
        console.log(err);
        res.json({
            error: 'ocorreu algum error'
        })
    }

}
server.use(errorHandler)

server.listen(process.env.PORT);