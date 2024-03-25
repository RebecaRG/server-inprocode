import express,{ Application, Request, Response  }  from 'express';
import cors from 'cors';
import routesProduct from '../routes/product';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application running on port ${this.port}`);
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API working!'
            })
        })
        this.app.use('/api/productos', routesProduct)
    }

    midlewares() {
        this.app.use(express.json());

        //Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Database connected');
        } catch (error) {
            console.log(error);
            console.log('Database connection error:');
        }
    }

}
export default Server;
