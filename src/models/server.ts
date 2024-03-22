import express,{ Application }  from 'express';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application running on port ${this.port}`);
        })
    }

}
export default Server;