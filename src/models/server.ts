import express,{ Application, Request, Response  }  from 'express';
import cors from 'cors';
import routesProduct from '../routes/product';
import routesTiendas from '../routes/tiendas';
import routesCategorias from '../routes/categorias';
import routesBares from '../routes/bares';
import routesBibliotecas from '../routes/bibliotecas';
import routesAsociaciones from '../routes/asociaciones';
import routesEventos from '../routes/eventos';
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
        this.app.use('/api/productos', routesProduct);
        this.app.use('/api/tiendas', routesTiendas);
        this.app.use('/api/categorias', routesCategorias);
        this.app.use('/api/bares', routesBares);
        this.app.use('/api/bibliotecas', routesBibliotecas);
        this.app.use('/api/asociaciones', routesAsociaciones);
        this.app.use('/api/eventos', routesEventos)
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
