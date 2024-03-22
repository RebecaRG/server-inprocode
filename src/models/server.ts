import express,{ Application, Request, Response  }  from 'express';
import routesProduct from '../routes/product';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
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
    }

}
export default Server;