import http from "http";
import express from "express";
import bodyParser from "body-parser";

import appConfig from "./config/app";
import dbConfig from "./config/db";
import routes from "./routes";

let app = express();

app.server = http.createServer(app);

// JSON parsing

app.use(bodyParser.json({
    limit: appConfig.bodyLimit
}))

// api routes
app.use(routes);

app.server.listen(appConfig.port);
console.log("Started listening on port ", app.server.address().port);

export default app;