import express from "express";
import middleware from "../middleware";
import config from "../config/app";
import initializeDB from "../db";

// controllers
import home from "../controllers/home_controller";
import artists from "../controllers/artist_controller";

let router = express();

initializeDB(db => {
    router.use(middleware({config,db}));

    // API routes
    router.use("/home",home({config,db}));
    router.use("/artists",artists({config,db}));
})

export default router;