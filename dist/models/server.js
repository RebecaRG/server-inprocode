"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_1 = __importDefault(require("../routes/product"));
const tiendas_1 = __importDefault(require("../routes/tiendas"));
const categorias_1 = __importDefault(require("../routes/categorias"));
const bares_1 = __importDefault(require("../routes/bares"));
const bibliotecas_1 = __importDefault(require("../routes/bibliotecas"));
const asociaciones_1 = __importDefault(require("../routes/asociaciones"));
const eventos_1 = __importDefault(require("../routes/eventos"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application running on port ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API working!'
            });
        });
        this.app.use('/api/productos', product_1.default);
        this.app.use('/api/tiendas', tiendas_1.default);
        this.app.use('/api/categorias', categorias_1.default);
        this.app.use('/api/bares', bares_1.default);
        this.app.use('/api/bibliotecas', bibliotecas_1.default);
        this.app.use('/api/asociaciones', asociaciones_1.default);
        this.app.use('/api/eventos', eventos_1.default);
    }
    midlewares() {
        this.app.use(express_1.default.json());
        //Cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database connected');
            }
            catch (error) {
                console.log(error);
                console.log('Database connection error:');
            }
        });
    }
}
exports.default = Server;
