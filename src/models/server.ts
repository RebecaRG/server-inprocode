import express,{ Application }  from 'express';

class Server {
    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 3001;
        this.listen();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application running on port ${this.port}`);
        })
    }

}
export default Server;