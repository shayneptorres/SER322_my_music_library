import http from "http";
import express from "express";
import bodyParser from "body-parser";
import path from "path"

import appConfig from "./config/app";
import dbConfig from "./config/db";
import setupDB from "./db/setupDB";
import routes from "./routes";

let app = express();

app.server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/views')));

// JSON parsing

app.use(bodyParser.json({
    limit: appConfig.bodyLimit
}))

// api routes
app.use(routes);

setupDB()

app.server.listen(appConfig.port);
console.log("Started listening on port ", app.server.address().port);

export default app;