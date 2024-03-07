import * as dotenv from "dotenv";
dotenv.config();

const { DATABASE_URL, PORT, SECRET_ACCESS_TOKEN } = process.env;

export { DATABASE_URL, PORT, SECRET_ACCESS_TOKEN };
