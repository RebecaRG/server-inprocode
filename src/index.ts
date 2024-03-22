import Server from "./models/server";
import dotenv from 'dotenv';

//Config environment variables
dotenv.config();

const server = new Server();