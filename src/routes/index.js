import express from "express";
import middleware from "../middleware";
import config from "../config/app";
import initializeDB from "../db";

// controllers
import home from "../controllers/home_controller";
import artists from "../controllers/artist_controller";
import albums from "../controllers/album_controller";
import songs from "../controllers/song_controller";

let router = express();

initializeDB(db => {
    router.use(middleware({config,db}));

    // API routes
    router.use("/home",home({config,db}));
    router.use("/artists",artists({config,db}));
    router.use("/albums",albums({config,db}));
    router.use("/songs",songs({config,db}));
})

export default router;